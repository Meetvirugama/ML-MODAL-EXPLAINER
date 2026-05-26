import * as THREE from "three"
import { CONFIG } from "../../config"

export default class IntroScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.create()
    scene.add(this.group)
  }

  create() {
    // Create title text visualization using particles
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 500

    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 15
      positions[i + 2] = (Math.random() - 0.5) * 10

      colors[i] = 0.3 + Math.random() * 0.7
      colors[i + 1] = 0.5 + Math.random() * 0.5
      colors[i + 2] = 1
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    )

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    this.particles = new THREE.Points(particleGeometry, particleMaterial)
    this.group.add(this.particles)

    // Create orbiting spheres
    const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: CONFIG.colors.cyan,
      shininess: 80,
      specular: 0x4cc9ff
    })

    this.orbitingSpheres = []
    for (let i = 0; i < 3; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.angle = (i / 3) * Math.PI * 2
      sphere.radius = 5
      sphere.castShadow = true
      sphere.receiveShadow = true
      this.orbitingSpheres.push(sphere)
      this.group.add(sphere)
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

    // Rotate particles
    if (this.particles) {
      this.particles.rotation.y += 0.001
      this.particles.rotation.x += 0.0005
    }

    // Orbit spheres
    if (this.orbitingSpheres) {
      this.orbitingSpheres.forEach((sphere, index) => {
        sphere.angle += 0.005
        sphere.position.x = Math.cos(sphere.angle) * sphere.radius
        sphere.position.z = Math.sin(sphere.angle) * sphere.radius
        sphere.scale.y =
          0.8 + 0.2 * Math.sin(Date.now() * 0.003 + index)
      })
    }
  }
}
