import * as THREE from "three"

export default class ConfusionMatrix {
  constructor(parentGroup, position) {
    this.parentGroup = parentGroup
    this.position = position
    this.group = new THREE.Group()
    this.group.position.copy(position)
    this.cells = []
    this.bars = []
    this.targetHeights = [1.5, 0.4, 0.3, 2.0] // TN, FP, FN, TP ratios
    this.create()
    this.parentGroup.add(this.group)
  }

  create() {
    const cellGeom = new THREE.BoxGeometry(2.0, 2.0, 0.15)
    
    const offsets = [
      { x: -1.1, y: 1.1, color: 0x1c315e },  // TN: Blue
      { x: 1.1, y: 1.1, color: 0xff3355 },   // FP: Red
      { x: -1.1, y: -1.1, color: 0xff3355 },  // FN: Red
      { x: 1.1, y: -1.1, color: 0x00ff88 }   // TP: Green
    ]

    const barGeom = new THREE.CylinderGeometry(0.3, 0.3, 1.0, 16)
    
    offsets.forEach((spec, idx) => {
      // Background plate
      const mat = new THREE.MeshPhongMaterial({
        color: spec.color,
        transparent: true,
        opacity: 0.85,
        shininess: 40
      })
      const plate = new THREE.Mesh(cellGeom, mat)
      plate.position.set(spec.x, spec.y, 0)
      plate.castShadow = true
      plate.receiveShadow = true
      this.group.add(plate)
      this.cells.push(plate)

      // 3D Bar growing along Z axis (toward camera)
      const barMat = new THREE.MeshPhongMaterial({
        color: spec.color,
        shininess: 100,
        specular: 0x555555
      })
      const bar = new THREE.Mesh(barGeom, barMat)
      bar.rotation.x = Math.PI / 2
      bar.position.set(spec.x, spec.y, 0.05)
      bar.scale.set(1, 0.01, 1) // Start flat
      this.group.add(bar)
      this.bars.push(bar)
    })
  }

  update() {
    const time = Date.now() * 0.003
    
    this.bars.forEach((bar, idx) => {
      const targetH = this.targetHeights[idx]
      const currentH = THREE.MathUtils.lerp(bar.scale.y, targetH, 0.06)
      bar.scale.set(1.0, currentH, 1.0)
      
      // Position Z so base stays pinned to the plate
      bar.position.z = 0.05 + currentH / 2
      
      // subtle pulse on plates
      this.cells[idx].scale.setScalar(1.0 + Math.sin(time + idx) * 0.015)
    })
  }

  destroy() {
    this.parentGroup.remove(this.group)
    this.cells.forEach(c => {
      c.geometry.dispose()
      c.material.dispose()
    })
    this.bars.forEach(b => {
      b.geometry.dispose()
      b.material.dispose()
    })
    this.cells = []
    this.bars = []
  }
}
