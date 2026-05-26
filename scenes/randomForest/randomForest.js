import * as THREE from "three"
import { CONFIG } from "../../config"

export default class RandomForest {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.trees = []
    this.particles = []
    this.voteSlots = []
    this.cycleTimer = 0
    this.create()
    scene.add(this.group)
  }

  create() {
    const treeCount = 5
    // Define mini tree structure coordinates
    this.localNodePositions = [
      new THREE.Vector3(0, 3, 0),       // 0: Root
      new THREE.Vector3(-1.2, 1.2, 0),  // 1: L1 Left
      new THREE.Vector3(1.2, 1.2, 0),   // 2: L1 Right
      new THREE.Vector3(-1.8, -0.6, 0), // 3: Leaf (LL)
      new THREE.Vector3(-0.6, -0.6, 0), // 4: Leaf (LR)
      new THREE.Vector3(0.6, -0.6, 0),  // 5: Leaf (RL)
      new THREE.Vector3(1.8, -0.6, 0),  // 6: Leaf (RR)
    ]

    this.connections = [
      [0, 1], [0, 2],
      [1, 3], [1, 4],
      [2, 5], [2, 6]
    ]

    // Specific configurations for each tree (distinct paths and votes)
    // Cyan = Class A (true), Lime = Class B (false)
    this.treeSpecs = [
      { path: [0, 1, 3], leafColors: [true, false, true, false], voteIsCyan: true },
      { path: [0, 2, 5], leafColors: [true, false, false, true], voteIsCyan: false },
      { path: [0, 2, 6], leafColors: [false, true, false, false], voteIsCyan: false },
      { path: [0, 1, 4], leafColors: [false, true, true, false], voteIsCyan: true },
      { path: [0, 2, 5], leafColors: [true, false, false, false], voteIsCyan: false },
    ]

    const nodeGeometry = new THREE.SphereGeometry(0.18, 8, 8)
    const leafGeometry = new THREE.SphereGeometry(0.22, 8, 8)

    for (let t = 0; t < treeCount; t++) {
      const treeGroup = new THREE.Group()
      treeGroup.position.x = (t - 2) * 5.8
      treeGroup.position.y = 1.0

      const spec = this.treeSpecs[t]

      this.localNodePositions.forEach((pos, idx) => {
        let color = CONFIG.colors.primary
        let geom = nodeGeometry
        
        if (idx >= 3) {
          geom = leafGeometry
          const isLeafCyan = spec.leafColors[idx - 3]
          color = isLeafCyan ? CONFIG.colors.cyan : CONFIG.colors.accent
        }

        const material = new THREE.MeshPhongMaterial({
          color: color,
          shininess: 70,
          specular: 0x333333
        })
        const nodeMesh = new THREE.Mesh(geom, material)
        nodeMesh.position.copy(pos)
        nodeMesh.castShadow = true
        nodeMesh.receiveShadow = true
        treeGroup.add(nodeMesh)
      })

      this.connections.forEach(([pIdx, cIdx]) => {
        const pPos = this.localNodePositions[pIdx]
        const cPos = this.localNodePositions[cIdx]

        const points = [pPos, cPos]
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
        const lineMaterial = new THREE.LineBasicMaterial({
          color: CONFIG.colors.primary,
          transparent: true,
          opacity: 0.35,
        })
        const line = new THREE.Line(lineGeometry, lineMaterial)
        treeGroup.add(line)
      })

      this.trees.push(treeGroup)
      this.group.add(treeGroup)
    }

    // Render voting indicators dashboard at bottom center
    this.votingBoard = new THREE.Group()
    this.votingBoard.position.set(0, -2.5, 0)
    
    const backGeometry = new THREE.BoxGeometry(6.5, 1.0, 0.1)
    const backMaterial = new THREE.MeshPhongMaterial({
      color: 0x101530,
      transparent: true,
      opacity: 0.8,
      shininess: 30
    })
    const backplane = new THREE.Mesh(backGeometry, backMaterial)
    backplane.receiveShadow = true
    this.votingBoard.add(backplane)

    const slotGeometry = new THREE.SphereGeometry(0.2, 8, 8)
    for (let i = 0; i < 5; i++) {
      const slotMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 80 })
      const slot = new THREE.Mesh(slotGeometry, slotMaterial)
      slot.position.set((i - 2) * 1.0, 0, 0.1)
      slot.castShadow = true
      slot.receiveShadow = true
      this.voteSlots.push(slot)
      this.votingBoard.add(slot)
    }

    this.group.add(this.votingBoard)
  }

  startVotingCycle() {
    this.particles.forEach(p => this.group.remove(p.mesh))
    this.particles = []

    this.voteSlots.forEach(slot => {
      slot.material.color.setHex(0x333333)
      slot.scale.set(1, 1, 1)
    })

    const startSource = new THREE.Vector3(0, 4.8, 0)
    const geom = new THREE.SphereGeometry(0.18, 8, 8)

    for (let t = 0; t < 5; t++) {
      const spec = this.treeSpecs[t]
      const particleColor = spec.voteIsCyan ? CONFIG.colors.cyan : CONFIG.colors.accent
      const mat = new THREE.MeshPhongMaterial({
        color: particleColor,
        transparent: true,
        opacity: 0.95,
        shininess: 90,
        specular: 0xffffff
      })
      const mesh = new THREE.Mesh(geom, mat)
      mesh.position.copy(startSource)
      mesh.castShadow = true
      this.group.add(mesh)

      const treeWorldOffset = this.trees[t].position
      const pathCoordinates = [
        startSource.clone(),
        new THREE.Vector3().addVectors(this.localNodePositions[0], treeWorldOffset),
        new THREE.Vector3().addVectors(this.localNodePositions[spec.path[1]], treeWorldOffset),
        new THREE.Vector3().addVectors(this.localNodePositions[spec.path[2]], treeWorldOffset),
        new THREE.Vector3((t - 2) * 1.0, -2.5, 0.1)
      ]

      this.particles.push({
        mesh: mesh,
        path: pathCoordinates,
        progress: 0,
        speed: 0.008 + Math.random() * 0.003,
        treeIdx: t,
        voteIsCyan: spec.voteIsCyan
      })
    }
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.cycleTimer = 0
    this.startVotingCycle()
  }

  hide() {
    this.visible = false
    this.group.visible = false
    this.particles.forEach(p => this.group.remove(p.mesh))
    this.particles = []
  }

  update() {
    if (!this.visible) return

    // Sway trees slightly in Y
    this.trees.forEach((tree) => {
      tree.rotation.y = Math.sin(Date.now() * 0.0005) * 0.15
    })

    // Cycle loop
    this.cycleTimer++
    if (this.cycleTimer > 350) {
      this.startVotingCycle()
      this.cycleTimer = 0
    }

    // Update active particle positions along paths
    this.particles.forEach((p) => {
      if (p.progress < 1.0) {
        p.progress += p.speed

        if (p.progress >= 1.0) {
          p.progress = 1.0
          p.mesh.position.copy(p.path[p.path.length - 1])
          p.mesh.visible = false

          // Light up voting register slots
          const slot = this.voteSlots[p.treeIdx]
          const finalColor = p.voteIsCyan ? CONFIG.colors.cyan : CONFIG.colors.accent
          slot.material.color.set(finalColor)
          slot.scale.set(1.4, 1.4, 1.4)
        } else {
          const numSegments = p.path.length - 1
          const segmentProgress = p.progress * numSegments
          const segmentIdx = Math.floor(segmentProgress)
          const subT = segmentProgress - segmentIdx

          const start = p.path[segmentIdx]
          const end = p.path[segmentIdx + 1]
          p.mesh.position.lerpVectors(start, end, subT)
        }
      }
    })

    // Decay slots back to scale 1
    this.voteSlots.forEach(slot => {
      slot.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    })
  }
}