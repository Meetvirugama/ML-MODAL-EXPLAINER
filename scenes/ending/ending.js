import * as THREE from "three"

export default class Ending {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.particles = []
    this.visible = false
    this.create()
    scene.add(this.group)
  }

  create() {
    const particleGeometry = new THREE.SphereGeometry(0.08, 8, 8)
    
    for (let i = 0; i < 300; i++) {
      const color = Math.random() > 0.5 ? "#00ffff" : "#ff00ff"
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 80,
        specular: 0xffffff
      })
      const particle = new THREE.Mesh(particleGeometry, material)

      particle.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )
      
      particle.castShadow = true
      particle.receiveShadow = true
      
      this.particles.push(particle)
      this.group.add(particle)
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

    this.particles.forEach((particle, index) => {
      particle.position.y += 0.02
      particle.rotation.x += 0.02
      particle.rotation.y += 0.02

      if (particle.position.y > 15) {
        particle.position.y = -15
      }
    })
  }
}