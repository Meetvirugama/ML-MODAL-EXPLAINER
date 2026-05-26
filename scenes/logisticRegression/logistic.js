import * as THREE from "three"
import { CONFIG } from "../../config"
import DatasetAnimation from "../../components/datasets/datasetAnimation"
import ProbabilityGraph from "../../components/graphs/probabilityGraph"

export default class LogisticRegression {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.boundary = null
    this.targetSlope = 0.6
    this.targetIntercept = 0.5
    this.currentSlope = -0.8
    this.currentIntercept = -2.5

    this.create()
    scene.add(this.group)
  }

  create() {
    // Generate data clusters using modular DatasetAnimation component
    // Class A (Magenta) centered in bottom-left zone
    this.clusterA = new DatasetAnimation(this.group, 20, new THREE.Vector3(-3.5, -1.0, 0), 1.1, "#ff00ff", 0.18)
    
    // Class B (Yellow) centered in top-right zone
    this.clusterB = new DatasetAnimation(this.group, 20, new THREE.Vector3(1.5, 1.8, 0), 1.1, "#ffee00", 0.18)

    this.clusterA.meshes.forEach(m => this.points.push(m))
    this.clusterB.meshes.forEach(m => this.points.push(m))

    // Interactive 3D Probability Graph showing classification confidence (positioned on right side)
    this.probGraph = new ProbabilityGraph(this.group, new THREE.Vector3(5.2, 0.5, 0))

    const lineMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0055, // Red initially
      shininess: 100,
      specular: 0xffffff,
      side: THREE.DoubleSide
    })

    // Create boundary as a thin box instead of a basic line for shadow-casting thickness
    const boundaryGeom = new THREE.BoxGeometry(10, 0.08, 0.08)
    this.boundary = new THREE.Mesh(boundaryGeom, lineMaterial)
    this.boundary.castShadow = true
    this.boundary.receiveShadow = true
    this.group.add(this.boundary)

    // Now update its position and angle safely
    this.updateLineGeometry(null, this.currentSlope, this.currentIntercept)
  }

  updateLineGeometry(geometry, m, c) {
    // We adjust rotation and position of our boundary mesh instead of rewriting vertices directly
    const angle = Math.atan(m)
    this.boundary.rotation.z = angle
    // Shift boundary vertically to match the intercept
    this.boundary.position.set(-1.0, c, 0)
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.currentSlope = -0.8
    this.currentIntercept = -2.5
    if (this.boundary) {
      this.boundary.material.color.setHex(0xff0055)
    }
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    // Depth rotation
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    // Animate point wobbling
    this.clusterA.update(0)
    this.clusterB.update(Math.PI)

    // Slowly adjust decision boundary (simulating gradient descent epochs)
    const learningRate = 0.015
    const slopeError = this.targetSlope - this.currentSlope
    const interceptError = this.targetIntercept - this.currentIntercept

    this.currentSlope += slopeError * learningRate
    this.currentIntercept += interceptError * learningRate

    // Update boundary position and angle
    this.updateLineGeometry(null, this.currentSlope, this.currentIntercept)

    // Transition color from Red to Cyan/Green
    const errorDistance = Math.abs(slopeError) + Math.abs(interceptError)
    if (errorDistance < 0.08) {
      this.boundary.material.color.setHex(0x00ff88) // Success Glow
    } else {
      const factor = Math.min(1, 1 - errorDistance / 3)
      this.boundary.material.color.setRGB(1 - factor, factor * 0.8, factor)
    }

    // Update the probability graph
    this.probGraph.update()
  }
}