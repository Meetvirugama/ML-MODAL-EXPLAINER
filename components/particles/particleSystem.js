import * as THREE from "three"
import { CONFIG } from "../../config"

export default class ParticleSystem {
  constructor(scene) {
    this.scene = scene
    this.createParticles()
  }

  createParticles() {
    const particleCount = CONFIG.particles.count
    const geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200
      positions[i + 1] = (Math.random() - 0.5) * 200
      positions[i + 2] = (Math.random() - 0.5) * 200

      // Color variation
      colors[i] = 0.3 + Math.random() * 0.3
      colors[i + 1] = 0.8 + Math.random() * 0.2
      colors[i + 2] = 1
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: CONFIG.particles.size,
      color: CONFIG.particles.color,
      transparent: true,
      opacity: CONFIG.particles.opacity,
      vertexColors: true,
      sizeAttenuation: true,
    })

    this.particles = new THREE.Points(geometry, material)
    this.scene.add(this.particles)

    // Store original positions for animation
    this.originalPositions = positions.slice()
  }

  update() {
    if (!this.particles) return

    const speed = this.speedMultiplier !== undefined ? this.speedMultiplier : 1.0

    // Rotate particles
    this.particles.rotation.y += 0.0005 * speed
    this.particles.rotation.x += 0.0002 * speed

    // Slightly modify positions for pulsing effect
    const positions = this.particles.geometry.attributes.position.array
    const time = Date.now() * 0.001 * speed

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] =
        this.originalPositions[i] +
        Math.sin(time + i) * 0.5
      positions[i + 1] =
        this.originalPositions[i + 1] +
        Math.cos(time + i * 0.5) * 0.5
      positions[i + 2] =
        this.originalPositions[i + 2] +
        Math.sin(time * 0.5 + i) * 0.5
    }

    this.particles.geometry.attributes.position.needsUpdate = true
  }
}