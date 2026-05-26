import * as THREE from "three"
import { CONFIG } from "../../config"

export default class DecisionTree {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.nodes = []
    this.particles = []
    this.spawnTimer = 0
    this.create()
    scene.add(this.group)
  }

  create() {
    // Explicit Node Positions
    this.nodePositions = [
      new THREE.Vector3(0, 5, 0),        // 0: Root

      new THREE.Vector3(-4, 2.5, 0),     // 1: L1 Left
      new THREE.Vector3(4, 2.5, 0),      // 2: L1 Right

      new THREE.Vector3(-6, 0, 0),       // 3: L2 LL
      new THREE.Vector3(-2, 0, 0),       // 4: L2 LR
      new THREE.Vector3(2, 0, 0),        // 5: L2 RL
      new THREE.Vector3(6, 0, 0),        // 6: L2 RR

      new THREE.Vector3(-7, -2.5, 0),    // 7: L3 Leaves
      new THREE.Vector3(-5, -2.5, 0),    // 8
      new THREE.Vector3(-3, -2.5, 0),    // 9
      new THREE.Vector3(-1, -2.5, 0),    // 10
      new THREE.Vector3(1, -2.5, 0),     // 11
      new THREE.Vector3(3, -2.5, 0),     // 12
      new THREE.Vector3(5, -2.5, 0),     // 13
      new THREE.Vector3(7, -2.5, 0),     // 14
    ]

    // Tree connections (Parent -> Child)
    this.connections = [
      [0, 1], [0, 2],
      [1, 3], [1, 4],
      [2, 5], [2, 6],
      [3, 7], [3, 8],
      [4, 9], [4, 10],
      [5, 11], [5, 12],
      [6, 13], [6, 14]
    ]

    // Paths from root to each of the 8 leaf nodes
    this.paths = [
      [0, 1, 3, 7],
      [0, 1, 3, 8],
      [0, 1, 4, 9],
      [0, 1, 4, 10],
      [0, 2, 5, 11],
      [0, 2, 5, 12],
      [0, 2, 6, 13],
      [0, 2, 6, 14]
    ]

    const nodeGeometry = new THREE.SphereGeometry(0.35, 16, 16)
    
    // Create Node meshes
    this.nodePositions.forEach((pos, idx) => {
      // Leaf nodes are colored class colors (7-10 Magenta, 11-14 Yellow)
      let color = CONFIG.colors.primary
      if (idx >= 7 && idx <= 10) color = "#ff00ff"
      if (idx >= 11 && idx <= 14) color = "#ffee00"

      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 80,
        specular: 0x444444
      })

      const nodeMesh = new THREE.Mesh(nodeGeometry, material)
      nodeMesh.position.copy(pos)
      nodeMesh.castShadow = true
      nodeMesh.receiveShadow = true
      this.nodes.push(nodeMesh)
      this.group.add(nodeMesh)
    })

    // Create Connection lines
    this.connections.forEach(([pIdx, cIdx]) => {
      const pPos = this.nodePositions[pIdx]
      const cPos = this.nodePositions[cIdx]

      const points = [pPos, cPos]
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: CONFIG.colors.primary,
        transparent: true,
        opacity: 0.4,
      })

      const line = new THREE.Line(lineGeometry, lineMaterial)
      this.group.add(line)
    })
  }

  spawnParticle() {
    const pathIdx = Math.floor(Math.random() * this.paths.length)
    const pathNodes = this.paths[pathIdx]
    
    // Left side is Magenta, right side is Yellow
    const color = pathIdx < 4 ? "#ff00ff" : "#ffee00"
    
    const geom = new THREE.SphereGeometry(0.12, 8, 8)
    const mat = new THREE.MeshPhongMaterial({
      color: color,
      shininess: 90,
      specular: 0xffffff
    })
    
    const mesh = new THREE.Mesh(geom, mat)
    mesh.position.copy(this.nodePositions[0])
    mesh.castShadow = true
    this.group.add(mesh)
    
    this.particles.push({
      mesh: mesh,
      path: pathNodes,
      progress: 0,
      speed: 0.015 + Math.random() * 0.01,
      targetLeaf: pathNodes[pathNodes.length - 1]
    })
  }

  show() {
    this.visible = true
    this.group.visible = true
  }

  hide() {
    this.visible = false
    this.group.visible = false
    this.particles.forEach(p => this.group.remove(p.mesh))
    this.particles = []
  }

  update() {
    if (!this.visible) return

    // Rotate tree slightly in Y for depth
    this.group.rotation.y = Math.sin(Date.now() * 0.0005) * 0.25

    // Spawn new data points
    this.spawnTimer++
    if (this.spawnTimer > 12) {
      this.spawnParticle()
      this.spawnTimer = 0
    }

    // Update active particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.progress += p.speed

      if (p.progress >= 1.0) {
        const leafNode = this.nodes[p.targetLeaf]
        leafNode.scale.set(1.4, 1.4, 1.4)
        
        this.group.remove(p.mesh)
        p.mesh.geometry.dispose()
        p.mesh.material.dispose()
        this.particles.splice(i, 1)
      } else {
        const numSegments = p.path.length - 1
        const segmentProgress = p.progress * numSegments
        const segmentIdx = Math.floor(segmentProgress)
        const subT = segmentProgress - segmentIdx

        const startPos = this.nodePositions[p.path[segmentIdx]]
        const endPos = this.nodePositions[p.path[segmentIdx + 1]]

        p.mesh.position.lerpVectors(startPos, endPos, subT)
      }
    }

    // Decay leaf nodes back to scale 1
    this.nodes.forEach((node) => {
      node.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08)
    })
  }
}