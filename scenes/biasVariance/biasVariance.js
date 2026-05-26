import * as THREE from "three"
import { CONFIG } from "../../config"

export default class BiasVariance {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.targets = []
    this.hits = []
    this.create()
    scene.add(this.group)
  }

  createTargetBoard(color1, color2, color3) {
    const boardGroup = new THREE.Group()

    // Outer Ring
    const outerGeom = new THREE.CylinderGeometry(1.6, 1.6, 0.1, 32)
    const outerMat = new THREE.MeshPhongMaterial({ color: color1, shininess: 30 })
    const outer = new THREE.Mesh(outerGeom, outerMat)
    outer.rotation.x = Math.PI / 2
    outer.castShadow = true
    outer.receiveShadow = true
    boardGroup.add(outer)

    // Middle Ring
    const middleGeom = new THREE.CylinderGeometry(1.0, 1.0, 0.12, 32)
    const middleMat = new THREE.MeshPhongMaterial({ color: color2, shininess: 40 })
    const middle = new THREE.Mesh(middleGeom, middleMat)
    middle.rotation.x = Math.PI / 2
    middle.position.z = 0.01
    middle.castShadow = true
    middle.receiveShadow = true
    boardGroup.add(middle)

    // Center Bullseye
    const innerGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.14, 32)
    const innerMat = new THREE.MeshPhongMaterial({ color: color3, shininess: 80, specular: 0xffffff })
    const inner = new THREE.Mesh(innerGeom, innerMat)
    inner.rotation.x = Math.PI / 2
    inner.position.z = 0.02
    inner.castShadow = true
    inner.receiveShadow = true
    boardGroup.add(inner)

    return boardGroup
  }

  create() {
    const hitGeometry = new THREE.SphereGeometry(0.08, 8, 8)
    const underfitColor = 0xff3333 // Red
    const optimalColor = 0x00ff88 // Lime
    const overfitColor = 0xffaa00 // Orange

    // Board 1: Underfit (High Bias, Low Variance)
    const board1 = this.createTargetBoard(0x12172b, 0x1f2647, 0xff3366)
    board1.position.set(-6, 0.5, 0)
    this.group.add(board1)
    this.targets.push(board1)

    for (let i = 0; i < 20; i++) {
      const hitMat = new THREE.MeshPhongMaterial({ color: underfitColor, shininess: 80, specular: 0xffffff })
      const hit = new THREE.Mesh(hitGeometry, hitMat)
      const r = Math.random() * 0.35
      const theta = Math.random() * Math.PI * 2
      hit.position.set(
        -6 - 0.8 + Math.cos(theta) * r,
        0.5 + 0.8 + Math.sin(theta) * r,
        0.12 + (Math.random() - 0.5) * 0.05
      )
      hit.originalY = hit.position.y
      hit.castShadow = true
      hit.receiveShadow = true
      this.group.add(hit)
      this.hits.push(hit)
    }

    // Board 2: Balanced Generalization (Low Bias, Low Variance)
    const board2 = this.createTargetBoard(0x12172b, 0x1f2647, 0x00ff88)
    board2.position.set(0, 0.5, 0)
    this.group.add(board2)
    this.targets.push(board2)

    for (let i = 0; i < 20; i++) {
      const hitMat = new THREE.MeshPhongMaterial({ color: optimalColor, shininess: 80, specular: 0xffffff })
      const hit = new THREE.Mesh(hitGeometry, hitMat)
      const r = Math.random() * 0.25
      const theta = Math.random() * Math.PI * 2
      hit.position.set(
        0 + Math.cos(theta) * r,
        0.5 + Math.sin(theta) * r,
        0.12 + (Math.random() - 0.5) * 0.05
      )
      hit.originalY = hit.position.y
      hit.castShadow = true
      hit.receiveShadow = true
      this.group.add(hit)
      this.hits.push(hit)
    }

    // Board 3: Overfit (Low Bias, High Variance)
    const board3 = this.createTargetBoard(0x12172b, 0x1f2647, 0xffaa00)
    board3.position.set(6, 0.5, 0)
    this.group.add(board3)
    this.targets.push(board3)

    for (let i = 0; i < 20; i++) {
      const hitMat = new THREE.MeshPhongMaterial({ color: overfitColor, shininess: 80, specular: 0xffffff })
      const hit = new THREE.Mesh(hitGeometry, hitMat)
      const r = 0.3 + Math.random() * 1.1
      const theta = Math.random() * Math.PI * 2
      hit.position.set(
        6 + Math.cos(theta) * r,
        0.5 + Math.sin(theta) * r,
        0.12 + (Math.random() - 0.5) * 0.05
      )
      hit.originalY = hit.position.y
      hit.castShadow = true
      hit.receiveShadow = true
      this.group.add(hit)
      this.hits.push(hit)
    }
  }

  show() {
    this.visible = true
    this.group.visible = true
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    const time = Date.now() * 0.002
    
    // Animate target boards and sync their corresponding clustered hit particles
    this.targets.forEach((board, idx) => {
      const deltaY = Math.sin(time + idx * 2) * 0.3
      board.position.y = 0.5 + deltaY
      
      const startIdx = idx * 20
      const endIdx = startIdx + 20
      for (let i = startIdx; i < endIdx; i++) {
        const hit = this.hits[i]
        if (hit && hit.originalY !== undefined) {
          hit.position.y = hit.originalY + deltaY
        }
      }
    })
  }
}