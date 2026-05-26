import * as THREE from "three"
import { CONFIG } from "../../config"
import LineGraph from "../../components/graphs/lineGraph"

export default class NeuralNetworkScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.layers = []
    this.connections = []
    this.pulses = []
    this.state = 0 // 0: Forward Prop, 1: Backprop
    this.stateTimer = 0
    this.create()
    scene.add(this.group)
  }

  create() {
    // Shifted x positions left to make room for the line graph on the right
    const layerSpecs = [
      { x: -6, count: 4 },
      { x: -3.5, count: 6 },
      { x: -1, count: 6 },
      { x: 1.5, count: 2 }
    ]

    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16)

    layerSpecs.forEach((spec, layerIdx) => {
      const layerNodes = []
      const yOffset = (spec.count - 1) * 1.2 / 2

      for (let i = 0; i < spec.count; i++) {
        const yPos = i * 1.2 - yOffset
        
        let color = 0x5a8eff
        if (layerIdx === 0) color = CONFIG.colors.cyan
        if (layerIdx === 3) color = 0xff00ff // Output (Magenta)

        const material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: 0.95,
          shininess: 90,
          specular: 0x555555
        })

        const node = new THREE.Mesh(nodeGeometry, material)
        node.position.set(spec.x, yPos, 0)
        node.castShadow = true
        node.receiveShadow = true
        this.group.add(node)
        layerNodes.push(node)
      }
      this.layers.push(layerNodes)
    })

    // Create connections between adjacent layers
    for (let l = 0; l < this.layers.length - 1; l++) {
      const layer1 = this.layers[l]
      const layer2 = this.layers[l + 1]

      layer1.forEach((n1) => {
        layer2.forEach((n2) => {
          const points = [n1.position, n2.position]
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineMaterial = new THREE.LineBasicMaterial({
            color: CONFIG.colors.primary,
            transparent: true,
            opacity: 0.15
          })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          this.group.add(line)
          this.connections.push({
            line: line,
            startPos: n1.position,
            endPos: n2.position,
            layerIdx: l
          })
        })
      })
    }

    // Modular Line Graph for Loss Decay on the right side
    this.lossGraph = new LineGraph(this.group, new THREE.Vector3(5.2, 0, 0))
  }

  triggerForwardProp() {
    this.pulses = []
    this.connections.forEach(conn => {
      if (conn.layerIdx === 0) {
        this.spawnPulse(conn.startPos, conn.endPos, CONFIG.colors.cyan, 0.02, 0)
      }
    })
  }

  triggerBackprop() {
    this.pulses = []
    this.connections.forEach(conn => {
      if (conn.layerIdx === 2) {
        this.spawnPulse(conn.endPos, conn.startPos, 0xff00ff, 0.02, 2)
      }
    })
  }

  spawnPulse(start, end, color, speed, currentLayerIdx) {
    const geom = new THREE.SphereGeometry(0.1, 8, 8)
    const mat = new THREE.MeshPhongMaterial({ color: color, shininess: 100, specular: 0xffffff })
    const mesh = new THREE.Mesh(geom, mat)
    mesh.position.copy(start)
    this.group.add(mesh)

    this.pulses.push({
      mesh: mesh,
      start: start,
      end: end,
      progress: 0,
      speed: speed,
      color: color,
      layerIdx: currentLayerIdx,
      triggeredNext: false
    })
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.state = 0
    this.stateTimer = 0
    this.triggerForwardProp()
  }

  hide() {
    this.visible = false
    this.group.visible = false
    this.pulses.forEach(p => this.group.remove(p.mesh))
    this.pulses = []
  }

  update() {
    if (!this.visible) return

    // Subtle y-rotation for 3D depth
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    this.stateTimer++

    // Update the live loss graph
    this.lossGraph.update()

    if (this.state === 0) {
      let allDone = true
      
      this.pulses.forEach((p) => {
        if (p.progress < 1.0) {
          p.progress += p.speed
          p.mesh.position.lerpVectors(p.start, p.end, p.progress)
          allDone = false
        } else if (!p.triggeredNext) {
          p.triggeredNext = true
          p.mesh.visible = false

          // Glow activation pulse in target neuron
          this.layers[p.layerIdx + 1].forEach((n) => {
            if (n.position.equals(p.end)) {
              n.scale.set(1.4, 1.4, 1.4)
            }
          })

          // Spawn next layer
          if (p.layerIdx < 2) {
            this.connections.forEach(conn => {
              if (conn.layerIdx === p.layerIdx + 1 && conn.startPos.equals(p.end)) {
                this.spawnPulse(conn.startPos, conn.endPos, CONFIG.colors.cyan, 0.02, p.layerIdx + 1)
              }
            })
          }
        }
      })

      if (allDone && this.stateTimer > 180) {
        this.state = 1
        this.stateTimer = 0
        this.triggerBackprop()
      }
    } else {
      let allDone = true

      this.pulses.forEach((p) => {
        if (p.progress < 1.0) {
          p.progress += p.speed
          p.mesh.position.lerpVectors(p.start, p.end, p.progress)
          allDone = false
        } else if (!p.triggeredNext) {
          p.triggeredNext = true
          p.mesh.visible = false

          this.layers[p.layerIdx].forEach((n) => {
            if (n.position.equals(p.end)) {
              n.scale.set(1.4, 1.4, 1.4)
            }
          })

          if (p.layerIdx > 0) {
            this.connections.forEach(conn => {
              if (conn.layerIdx === p.layerIdx - 1 && conn.endPos.equals(p.end)) {
                this.spawnPulse(conn.endPos, conn.startPos, 0xff00ff, 0.02, p.layerIdx - 1)
              }
            })
          }
        }
      })

      if (allDone && this.stateTimer > 180) {
        this.state = 0
        this.stateTimer = 0
        this.triggerForwardProp()
      }
    }

    // Decay neuron sizes back to normal
    this.layers.forEach(layer => {
      layer.forEach(n => {
        n.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08)
      })
    })

    // Clean up finished particles
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i]
      if (p.progress >= 1.0 && p.triggeredNext) {
        this.group.remove(p.mesh)
        p.mesh.geometry.dispose()
        p.mesh.material.dispose()
        this.pulses.splice(i, 1)
      }
    }
  }
}
