import * as THREE from "three"
import { CONFIG } from "../../config"
import DatasetAnimation from "../../components/datasets/datasetAnimation"

export default class KNearestNeighbors {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.neighborLines = []
    this.queryPoint = null
    this.sweepCircle = null
    this.timer = 0
    this.create()
    scene.add(this.group)
  }

  create() {
    // Generate data clusters using modular DatasetAnimation component
    this.clusterA = new DatasetAnimation(this.group, 12, new THREE.Vector3(-3.2, 1.6, 0), 1.0, CONFIG.colors.cyan, 0.18)
    this.clusterB = new DatasetAnimation(this.group, 12, new THREE.Vector3(3.2, -1.6, 0), 1.0, CONFIG.colors.accent, 0.18)

    // Index points for proximity calculations
    this.clusterA.meshes.forEach((mesh) => {
      mesh.isCyan = true
      this.points.push(mesh)
    })

    this.clusterB.meshes.forEach((mesh) => {
      mesh.isCyan = false
      this.points.push(mesh)
    })

    // Query point positioned in boundary zone (MeshPhongMaterial for premium specularity)
    this.queryPos = new THREE.Vector3(-0.6, -0.5, 0)
    const queryGeom = new THREE.SphereGeometry(0.25, 16, 16)
    this.queryMat = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 90,
      specular: 0x444444
    })
    this.queryPoint = new THREE.Mesh(queryGeom, this.queryMat)
    this.queryPoint.position.copy(this.queryPos)
    this.queryPoint.castShadow = true
    this.queryPoint.receiveShadow = true
    this.group.add(this.queryPoint)

    // Sweep Circle Radar
    const circleGeom = new THREE.RingGeometry(0.01, 0.05, 32)
    const circleMat = new THREE.MeshPhongMaterial({
      color: 0x888888,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    })
    this.sweepCircle = new THREE.Mesh(circleGeom, circleMat)
    this.sweepCircle.position.copy(this.queryPos)
    this.sweepCircle.position.z = -0.05
    this.group.add(this.sweepCircle)
  }

  runKNNSweep() {
    this.neighborLines.forEach(line => this.group.remove(line))
    this.neighborLines = []
    this.queryMat.color.setHex(0xffffff)
    this.sweepCircle.scale.set(1, 1, 1)
    this.sweepCircle.material.opacity = 0.4
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.timer = 0
    this.runKNNSweep()
  }

  hide() {
    this.visible = false
    this.group.visible = false
    this.neighborLines.forEach(line => this.group.remove(line))
    this.neighborLines = []
  }

  update() {
    if (!this.visible) return

    // Depth rotation
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    // Animate point wobbling
    this.clusterA.update(0)
    this.clusterB.update(Math.PI)

    this.timer++
    const cycleLength = 180

    if (this.timer > cycleLength) {
      this.runKNNSweep()
      this.timer = 0
    }

    const t = this.timer / cycleLength

    // Step 1: Expand search radius
    if (t < 0.5) {
      const radiusScale = t * 2 * 90
      this.sweepCircle.scale.set(radiusScale, radiusScale, 1)
    } 
    // Step 2: Draw neighbors connections
    else if (t < 0.8) {
      if (this.neighborLines.length === 0) {
        this.sweepCircle.material.opacity = 0.1

        const distances = this.points.map(p => {
          return { pt: p, dist: p.position.distanceTo(this.queryPos) }
        })
        distances.sort((a, b) => a.dist - b.dist)

        let cyanCount = 0
        const K = 5

        for (let i = 0; i < K; i++) {
          const neighbor = distances[i].pt
          if (neighbor.isCyan) cyanCount++

          const points = [this.queryPos, neighbor.position]
          const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
          const lineMat = new THREE.LineBasicMaterial({
            color: 0xffaa00,
            linewidth: 2,
            transparent: true,
            opacity: 0.8
          })
          const line = new THREE.Line(lineGeom, lineMat)
          this.group.add(line)
          this.neighborLines.push(line)

          neighbor.scale.set(1.4, 1.4, 1.4)
        }

        this.majorityIsCyan = (cyanCount > K / 2)
      }
    } 
    // Step 3: Classify point
    else {
      const finalColor = this.majorityIsCyan ? CONFIG.colors.cyan : CONFIG.colors.accent
      this.queryMat.color.set(finalColor)
      
      const pulse = 1.0 + Math.sin(Date.now() * 0.01) * 0.15
      this.queryPoint.scale.set(pulse, pulse, pulse)
    }

    this.points.forEach(p => {
      // Lerp scale back to normal if pulse ended
      p.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08)
    })
  }
}
