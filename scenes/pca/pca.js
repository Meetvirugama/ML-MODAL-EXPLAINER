import * as THREE from "three"
import { CONFIG } from "../../config"

export default class PCAVisual {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.arrows = []
    this.create()
    scene.add(this.group)
  }

  create() {
    const count = 80
    const pointGeom = new THREE.SphereGeometry(0.12, 8, 8)
    const pointMat = new THREE.MeshPhongMaterial({
      color: "#ff00ff",
      shininess: 60,
      specular: 0x4cc9ff,
      transparent: true,
      opacity: 0.8
    })

    const rotationMatrix = new THREE.Matrix4()
      .makeRotationZ(Math.PI / 4)
      .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 9))

    for (let i = 0; i < count; i++) {
      const u = (Math.random() - 0.5) * 8.0
      const v = (Math.random() - 0.5) * 2.0
      const w = (Math.random() - 0.5) * 0.8
      
      const pos = new THREE.Vector3(u, v, w)
      pos.applyMatrix4(rotationMatrix)

      const pt = new THREE.Mesh(pointGeom, pointMat)
      pt.position.copy(pos)
      pt.originalPosition = pos.clone()
      pt.castShadow = true
      pt.receiveShadow = true
      this.group.add(pt)
      this.points.push(pt)
    }

    const pc1Dir = new THREE.Vector3(1, 1, 0.3).normalize()
    const pc1Origin = new THREE.Vector3(0, 0, 0)
    const pc1Length = 5.0
    const arrowHelper1 = new THREE.ArrowHelper(pc1Dir, pc1Origin, pc1Length, CONFIG.colors.cyan, 0.6, 0.3)
    this.group.add(arrowHelper1)
    this.arrows.push(arrowHelper1)

    const pc2Dir = new THREE.Vector3(-1, 1, -0.2).normalize()
    const pc2Length = 2.5
    const arrowHelper2 = new THREE.ArrowHelper(pc2Dir, pc1Origin, pc2Length, "#ffee00", 0.6, 0.3)
    this.group.add(arrowHelper2)
    this.arrows.push(arrowHelper2)

    this.timer = 0
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.timer = 0
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    this.timer++
    const cycleLength = 300
    if (this.timer > cycleLength) {
      this.timer = 0
    }

    const t = this.timer / cycleLength

    if (t < 0.4) {
      this.group.rotation.x = Math.sin(Date.now() * 0.0005) * 0.3
      this.group.rotation.y = Math.sin(Date.now() * 0.0003) * 0.6
      this.group.rotation.z = 0

      this.points.forEach(p => {
        p.position.copy(p.originalPosition)
      })
    } 
    else if (t < 0.8) {
      this.points.forEach(p => {
        const orig = p.originalPosition
        const pc1 = new THREE.Vector3(1, 1, 0.3).normalize()
        const pc2 = new THREE.Vector3(-1, 1, -0.2).normalize()

        const projPC1 = orig.dot(pc1)
        const projPC2 = orig.dot(pc2)

        const flatPos = new THREE.Vector3()
          .addScaledVector(pc1, projPC1)
          .addScaledVector(pc2, projPC2)

        p.position.lerpVectors(orig, flatPos, (t - 0.4) * 2.5)
      })
    } 
    else {
      this.points.forEach(p => {
        const orig = p.originalPosition
        const pc1 = new THREE.Vector3(1, 1, 0.3).normalize()
        const pc2 = new THREE.Vector3(-1, 1, -0.2).normalize()
        const projPC1 = orig.dot(pc1)
        const projPC2 = orig.dot(pc2)
        const flatPos = new THREE.Vector3()
          .addScaledVector(pc1, projPC1)
          .addScaledVector(pc2, projPC2)
        p.position.copy(flatPos)
      })
    }

    const time = Date.now() * 0.005
    this.arrows.forEach((arrow, idx) => {
      const scale = 1.0 + Math.sin(time + idx) * 0.08
      arrow.scale.set(scale, scale, scale)
    })
  }
}
