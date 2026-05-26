import * as THREE from "three"
import { randomNormal } from "../../utils/mathUtils"

export default class DatasetAnimation {
  constructor(parentGroup, count, center, stdDev, color, size = 0.15) {
    this.parentGroup = parentGroup
    this.count = count
    this.center = center
    this.stdDev = stdDev
    this.color = color
    this.size = size
    this.meshes = []
    this.create()
  }

  create() {
    const geom = new THREE.SphereGeometry(this.size, 8, 8)
    const mat = new THREE.MeshPhongMaterial({
      color: this.color,
      shininess: 80,
      specular: 0x444444
    })

    for (let i = 0; i < this.count; i++) {
      const mesh = new THREE.Mesh(geom, mat)
      
      // Sample position using normal distribution
      const x = randomNormal(this.center.x, this.stdDev)
      const y = randomNormal(this.center.y, this.stdDev)
      const z = randomNormal(this.center.z, this.stdDev * 0.4)

      mesh.position.set(x, y, z)
      mesh.originalY = y
      mesh.castShadow = true
      mesh.receiveShadow = true
      
      this.parentGroup.add(mesh)
      this.meshes.push(mesh)
    }
  }

  update(timeOffset = 0) {
    const time = Date.now() * 0.003 + timeOffset
    this.meshes.forEach((mesh, idx) => {
      mesh.position.y = mesh.originalY + Math.sin(time + idx) * 0.04
      mesh.scale.setScalar(0.95 + 0.12 * Math.sin(time * 0.8 + idx))
    })
  }

  destroy() {
    this.meshes.forEach((mesh) => {
      this.parentGroup.remove(mesh)
      mesh.geometry.dispose()
      mesh.material.dispose()
    })
    this.meshes = []
  }
}
