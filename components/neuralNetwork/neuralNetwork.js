import * as THREE from "three"
import { CONFIG } from "../../config"

export default class NeuralNetwork {
  constructor(scene) {
    this.scene = scene
    this.nodes = []
    this.lines = []
    this.createNetwork()
  }

  createNetwork() {
    const nodeGeometry = new THREE.SphereGeometry(
      CONFIG.neuralNetwork.nodeSize,
      8,
      8
    )

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: CONFIG.neuralNetwork.nodeColor,
    })

    // Create nodes
    for (let i = 0; i < CONFIG.neuralNetwork.nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)

      node.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )

      this.nodes.push(node)
      this.scene.add(node)
    }

    // Create connections
    for (let i = 0; i < CONFIG.neuralNetwork.connectionCount; i++) {
      const node1 = this.nodes[
        Math.floor(Math.random() * this.nodes.length)
      ]

      const node2 = this.nodes[
        Math.floor(Math.random() * this.nodes.length)
      ]

      const points = [node1.position, node2.position]

      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const material = new THREE.LineBasicMaterial({
        color: CONFIG.neuralNetwork.lineColor,
        transparent: true,
        opacity: CONFIG.neuralNetwork.lineOpacity,
      })

      const line = new THREE.Line(geometry, material)

      this.lines.push(line)
      this.scene.add(line)
    }
  }

  update() {
    // Animate nodes
    this.nodes.forEach((node, index) => {
      node.rotation.x += 0.001
      node.rotation.y += 0.002
      node.scale.y = 1 + Math.sin(Date.now() * 0.001 + index) * 0.3
    })

    // Animate lines opacity
    this.lines.forEach((line, index) => {
      line.material.opacity =
        CONFIG.neuralNetwork.lineOpacity *
        (0.5 + 0.5 * Math.sin(Date.now() * 0.002 + index))
    })
  }
}