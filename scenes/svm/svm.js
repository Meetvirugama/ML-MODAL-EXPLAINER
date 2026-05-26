import * as THREE from "three"
import { CONFIG } from "../../config"
import DatasetAnimation from "../../components/datasets/datasetAnimation"

export default class SupportVectorMachine {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.supportVectors = []
    
    this.create()
    scene.add(this.group)
  }

  create() {
    // Generate data clusters using modular DatasetAnimation component
    this.clusterA = new DatasetAnimation(this.group, 10, new THREE.Vector3(-3.8, 1.8, 0), 1.0, CONFIG.colors.cyan, 0.18)
    this.clusterB = new DatasetAnimation(this.group, 10, new THREE.Vector3(3.8, -1.8, 0), 1.0, CONFIG.colors.accent, 0.18)

    this.clusterA.meshes.forEach(m => this.points.push(m))
    this.clusterB.meshes.forEach(m => this.points.push(m))

    // Dynamic support vector selection
    // Find the 2 closest points in clusterA to the boundary line y = x (minimize y - x)
    const sortedA = [...this.clusterA.meshes].sort((p1, p2) => {
      return (p1.position.y - p1.position.x) - (p2.position.y - p2.position.x)
    })

    // Find the 2 closest points in clusterB to the boundary line y = x (minimize x - y)
    const sortedB = [...this.clusterB.meshes].sort((p1, p2) => {
      return (p1.position.x - p1.position.y) - (p2.position.x - p2.position.y)
    })

    const supportA = [sortedA[0], sortedA[1]]
    const supportB = [sortedB[0], sortedB[1]]

    const svRingGeom = new THREE.RingGeometry(0.3, 0.38, 16)

    supportA.forEach((p, idx) => {
      const mat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.cyan, side: THREE.DoubleSide })
      const ring = new THREE.Mesh(svRingGeom, mat)
      ring.position.copy(p.position)
      ring.position.z = 0.05
      this.group.add(ring)
      this.supportVectors.push({ ring, p })
    })

    supportB.forEach((p, idx) => {
      const mat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.accent, side: THREE.DoubleSide })
      const ring = new THREE.Mesh(svRingGeom, mat)
      ring.position.copy(p.position)
      ring.position.z = 0.05
      this.group.add(ring)
      this.supportVectors.push({ ring, p })
    })

    // Main separating boundary: y = x (represented as a glossy thin box for shadow support)
    const boundaryGeom = new THREE.BoxGeometry(16, 0.08, 0.08)
    const boundaryMat = new THREE.MeshPhongMaterial({
      color: 0xff00ff,
      shininess: 90,
      specular: 0xffffff
    })
    this.boundary = new THREE.Mesh(boundaryGeom, boundaryMat)
    this.boundary.rotation.z = Math.PI / 4 // 45 degrees for y = x
    this.boundary.castShadow = true
    this.boundary.receiveShadow = true
    this.group.add(this.boundary)

    // Margins (Dashed Lines)
    const marginMat = new THREE.LineDashedMaterial({
      color: 0x888888,
      dashSize: 0.2,
      gapSize: 0.2,
      transparent: true,
      opacity: 0.6
    })

    this.marginAGeom = new THREE.BufferGeometry()
    this.updateLineGeometry(this.marginAGeom, 0.2)
    this.marginA = new THREE.Line(this.marginAGeom, marginMat)
    this.marginA.computeLineDistances()
    this.group.add(this.marginA)

    this.marginBGeom = new THREE.BufferGeometry()
    this.updateLineGeometry(this.marginBGeom, -0.2)
    this.marginB = new THREE.Line(this.marginBGeom, marginMat)
    this.marginB.computeLineDistances()
    this.group.add(this.marginB)

    this.currentMargin = 0.2
    this.targetMargin = 1.4 // Maximum separation
  }

  updateLineGeometry(geom, offset) {
    const x1 = -6
    const y1 = 1.0 * x1 + offset
    const x2 = 6
    const y2 = 1.0 * x2 + offset
    const points = [new THREE.Vector3(x1, y1, 0), new THREE.Vector3(x2, y2, 0)]
    geom.setFromPoints(points)
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.currentMargin = 0.2
    if (this.boundary) {
      this.boundary.material.color.setHex(0xff00ff)
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

    // Widening margin animation
    if (this.currentMargin < this.targetMargin) {
      this.currentMargin += 0.015
      
      this.updateLineGeometry(this.marginA.geometry, this.currentMargin)
      this.marginA.geometry.attributes.position.needsUpdate = true
      this.marginA.computeLineDistances()

      this.updateLineGeometry(this.marginB.geometry, -this.currentMargin)
      this.marginB.geometry.attributes.position.needsUpdate = true
      this.marginB.computeLineDistances()
    } else {
      this.boundary.material.color.setHex(0x00ff88) // Locked in!
    }

    // Update rings position & pulsing scale to track points
    const time = Date.now() * 0.005
    this.supportVectors.forEach((sv, idx) => {
      sv.ring.position.copy(sv.p.position)
      sv.ring.position.z = 0.05
      
      const scale = 1.0 + Math.sin(time + idx) * 0.15
      sv.ring.scale.set(scale, scale, 1)
    })
  }
}
