import * as THREE from "three"

export default class ProbabilityGraph {
  constructor(parentGroup, position) {
    this.parentGroup = parentGroup
    this.position = position
    this.group = new THREE.Group()
    this.group.position.copy(position)
    this.bars = []
    this.targetHeights = [0.2, 2.2, 0.35] // Class A, Class B (target), Class C
    this.create()
    this.parentGroup.add(this.group)
  }

  create() {
    // Base platform
    const baseGeom = new THREE.BoxGeometry(4.5, 0.15, 1.5)
    const baseMat = new THREE.MeshPhongMaterial({ color: 0x222538 })
    const base = new THREE.Mesh(baseGeom, baseMat)
    base.position.set(0, -1.0, 0)
    base.receiveShadow = true
    this.group.add(base)

    // Three Class Confidence Bars
    const barColors = [0x00ffff, 0x00ff88, 0xff00ff]
    const barGeom = new THREE.CylinderGeometry(0.35, 0.35, 1.0, 16)

    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshPhongMaterial({
        color: barColors[i],
        shininess: 90,
        specular: 0x444444
      })
      const bar = new THREE.Mesh(barGeom, mat)
      bar.position.set((i - 1) * 1.3, -1.0, 0)
      bar.scale.set(1, 0.1, 1)
      bar.castShadow = true
      bar.receiveShadow = true
      this.group.add(bar)
      this.bars.push(bar)
    }
  }

  update() {
    const time = Date.now() * 0.003
    const scaleFactor = 1.0 + Math.sin(time) * 0.08
    
    this.bars.forEach((bar, idx) => {
      let targetH = this.targetHeights[idx]
      if (idx === 1) {
        targetH *= scaleFactor
      }
      
      const currentH = THREE.MathUtils.lerp(bar.scale.y, targetH, 0.08)
      bar.scale.set(1.0, currentH, 1.0)
      bar.position.y = -1.0 + currentH / 2
    })
  }

  destroy() {
    this.parentGroup.remove(this.group)
    this.bars.forEach(b => {
      b.geometry.dispose()
      b.material.dispose()
    })
    this.bars = []
  }
}
