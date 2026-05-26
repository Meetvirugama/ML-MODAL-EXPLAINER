import * as THREE from "three"
import { CONFIG } from "../../config"

export default class KagglePipeline {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.nodes = []
    this.lines = []
    this.pulses = []
    this.create()
    scene.add(this.group)
  }

  create() {
    this.stagePositions = [
      new THREE.Vector3(-6, 0, 0),  // 0: Data
      new THREE.Vector3(-2, 0, 0),  // 1: Feature Engineering
      new THREE.Vector3(2, 0, 0),   // 2: Model Ensembling
      new THREE.Vector3(6, 0, 0)    // 3: Gold Submission
    ]

    // Stage 0: Raw Data (Blue Cube - glossy Standard material with specular reflections)
    const cubeGeom = new THREE.BoxGeometry(1.2, 1.2, 1.2)
    const cubeMat = new THREE.MeshPhongMaterial({
      color: 0x4cc9ff,
      shininess: 90,
      specular: 0xffffff,
      wireframe: false
    })
    const dataNode = new THREE.Mesh(cubeGeom, cubeMat)
    dataNode.position.copy(this.stagePositions[0])
    dataNode.castShadow = true
    dataNode.receiveShadow = true
    this.group.add(dataNode)
    this.nodes.push(dataNode)

    // Stage 1: Feature Engineering (Green Torus - shiny Phong material)
    const torusGeom = new THREE.TorusGeometry(0.7, 0.2, 16, 64)
    const torusMat = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      shininess: 80,
      specular: 0x444444
    })
    const featureNode = new THREE.Mesh(torusGeom, torusMat)
    featureNode.position.copy(this.stagePositions[1])
    featureNode.castShadow = true
    featureNode.receiveShadow = true
    this.group.add(featureNode)
    this.nodes.push(featureNode)

    // Stage 2: Model Ensemble (Concentric Cones - glossy magenta)
    const ensembleGroup = new THREE.Group()
    ensembleGroup.position.copy(this.stagePositions[2])
    const coneGeom = new THREE.ConeGeometry(0.6, 1.0, 16)
    const coneMat = new THREE.MeshPhongMaterial({
      color: 0xff00ff,
      shininess: 80,
      specular: 0x444444
    })
    const cone1 = new THREE.Mesh(coneGeom, coneMat)
    cone1.rotation.x = Math.PI
    cone1.position.y = -0.3
    cone1.castShadow = true
    cone1.receiveShadow = true
    const cone2 = new THREE.Mesh(coneGeom, coneMat)
    cone2.position.y = 0.3
    cone2.castShadow = true
    cone2.receiveShadow = true
    ensembleGroup.add(cone1)
    ensembleGroup.add(cone2)
    this.group.add(ensembleGroup)
    this.nodes.push(ensembleGroup)

    // Stage 3: Kaggle Leaderboard (Gold Trophy - premium MeshStandardMaterial with high metalness)
    const trophyGroup = new THREE.Group()
    trophyGroup.position.copy(this.stagePositions[3])
    
    const cylinderGeom = new THREE.CylinderGeometry(0.7, 0.7, 1.2, 32)
    const cylinderMat = new THREE.MeshStandardMaterial({ 
      color: 0xffd700, // Gold
      metalness: 0.9,
      roughness: 0.1,
      name: "goldTrophy"
    })
    const trophy = new THREE.Mesh(cylinderGeom, cylinderMat)
    trophy.castShadow = true
    trophy.receiveShadow = true

    const baseGeom = new THREE.BoxGeometry(1.6, 0.2, 1.6)
    const baseMat = new THREE.MeshPhongMaterial({ color: 0x222222, shininess: 50 })
    const base = new THREE.Mesh(baseGeom, baseMat)
    base.position.y = -0.7
    base.castShadow = true
    base.receiveShadow = true
    
    trophyGroup.add(trophy)
    trophyGroup.add(base)
    this.group.add(trophyGroup)
    this.nodes.push(trophyGroup)

    // Pipeline Arrows
    for (let i = 0; i < 3; i++) {
      const p1 = this.stagePositions[i]
      const p2 = this.stagePositions[i + 1]

      const points = [p1, p2]
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: CONFIG.colors.primary,
        transparent: true,
        opacity: 0.3
      })
      const line = new THREE.Line(lineGeom, lineMat)
      this.group.add(line)
      this.lines.push(line)
    }

    // Glowing Data Flow Pulses
    const pulseGeometry = new THREE.SphereGeometry(0.12, 16, 16)
    const pulseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100 })
    for (let i = 0; i < 3; i++) {
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
      pulse.position.copy(this.stagePositions[0])
      pulse.progress = i * 0.33
      pulse.castShadow = true
      this.group.add(pulse)
      this.pulses.push(pulse)
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

    // Depth rotation
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    // Rotate elements
    this.nodes[0].rotation.x += 0.01
    this.nodes[0].rotation.y += 0.01
    this.nodes[1].rotation.y += 0.015
    this.nodes[2].rotation.y += 0.02
    this.nodes[3].rotation.y += 0.006

    // Animate flow pulses
    this.pulses.forEach((pulse) => {
      pulse.progress += 0.0055
      if (pulse.progress > 1.0) {
        pulse.progress = 0
      }

      const totalSegments = 3
      const segmentProgress = pulse.progress * totalSegments
      const segmentIdx = Math.floor(segmentProgress)
      const subT = segmentProgress - segmentIdx

      const start = this.stagePositions[segmentIdx]
      const end = this.stagePositions[segmentIdx + 1]

      pulse.position.lerpVectors(start, end, subT)
    })
  }
}
