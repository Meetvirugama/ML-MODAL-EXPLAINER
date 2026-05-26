import * as THREE from "three"
import { CONFIG } from "../../config"

export default class XGBoostScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.plots = []
    this.trees = []
    this.pulseTimer = 0
    this.create()
    scene.add(this.group)
  }

  createResidualPlot(centerX, centerY, varianceMultiplier) {
    const plotGroup = new THREE.Group()
    plotGroup.position.set(centerX, centerY, 0)

    // Center axis
    const axisGeom = new THREE.BoxGeometry(3.2, 0.04, 0.04)
    const axisMat = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 30 })
    const axis = new THREE.Mesh(axisGeom, axisMat)
    axis.castShadow = true
    axis.receiveShadow = true
    plotGroup.add(axis)

    // Boundary ticks
    const boundaryGeom = new THREE.BoxGeometry(0.04, 1.6, 0.04)
    const boundaryLeft = new THREE.Mesh(boundaryGeom, axisMat)
    boundaryLeft.position.x = -1.6
    boundaryLeft.castShadow = true
    boundaryLeft.receiveShadow = true
    plotGroup.add(boundaryLeft)

    // Scatter data points
    const pointGeom = new THREE.SphereGeometry(0.08, 8, 8)
    const pointsArray = []

    for (let i = 0; i < 15; i++) {
      const isCorrectClass = Math.random() > 0.5
      const color = isCorrectClass ? CONFIG.colors.cyan : CONFIG.colors.accent
      const mat = new THREE.MeshPhongMaterial({ color: color, shininess: 80, specular: 0xffffff })
      const pt = new THREE.Mesh(pointGeom, mat)

      const x = (i - 7) * 0.22
      const y = (Math.random() - 0.5) * 2.0 * varianceMultiplier
      pt.position.set(x, y, 0)
      pt.originalY = y
      pt.castShadow = true
      pt.receiveShadow = true
      plotGroup.add(pt)
      pointsArray.push(pt)
    }

    return { group: plotGroup, points: pointsArray }
  }

  createMiniTree(centerX, centerY) {
    const treeGroup = new THREE.Group()
    treeGroup.position.set(centerX, centerY, 0)

    const nodePositions = [
      new THREE.Vector3(0, 0.8, 0),        // Root
      new THREE.Vector3(-0.6, 0.1, 0),     // L1 Left
      new THREE.Vector3(0.6, 0.1, 0),      // L1 Right
      new THREE.Vector3(-0.9, -0.6, 0),    // Leaves
      new THREE.Vector3(-0.3, -0.6, 0),
      new THREE.Vector3(0.3, -0.6, 0),
      new THREE.Vector3(0.9, -0.6, 0)
    ]

    const connections = [
      [0, 1], [0, 2],
      [1, 3], [1, 4],
      [2, 5], [2, 6]
    ]

    const geom = new THREE.SphereGeometry(0.14, 8, 8)
    const mat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.primary, shininess: 80 })

    nodePositions.forEach((pos, idx) => {
      let nodeMat = mat
      if (idx >= 3) {
        const leafColor = idx % 2 === 0 ? CONFIG.colors.cyan : CONFIG.colors.accent
        nodeMat = new THREE.MeshPhongMaterial({ color: leafColor, shininess: 80, specular: 0xffffff })
      }
      const node = new THREE.Mesh(geom, nodeMat)
      node.position.copy(pos)
      node.castShadow = true
      node.receiveShadow = true
      treeGroup.add(node)
    })

    connections.forEach(([pIdx, cIdx]) => {
      const points = [nodePositions[pIdx], nodePositions[cIdx]]
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: CONFIG.colors.primary,
        transparent: true,
        opacity: 0.4
      })
      const line = new THREE.Line(lineGeom, lineMat)
      treeGroup.add(line)
    })

    return treeGroup
  }

  create() {
    // Original Data
    const plot1 = this.createResidualPlot(-6, 2.0, 0.8)
    this.group.add(plot1.group)
    this.plots.push(plot1)

    // Tree 1
    const tree1 = this.createMiniTree(-1.5, 2.0)
    this.group.add(tree1)
    this.trees.push(tree1)

    // Residuals 1
    const plot2 = this.createResidualPlot(3.0, 2.0, 0.35)
    this.group.add(plot2.group)
    this.plots.push(plot2)

    // Tree 2
    const tree2 = this.createMiniTree(-1.5, -1.8)
    this.group.add(tree2)
    this.trees.push(tree2)

    // Final Residuals
    const plot3 = this.createResidualPlot(3.0, -1.8, 0.1)
    this.group.add(plot3.group)
    this.plots.push(plot3)

    // Flow Pulse
    const pulseGeometry = new THREE.SphereGeometry(0.12, 8, 8)
    const pulseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, specular: 0xffffff })
    this.pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial)
    this.pulseMesh.castShadow = true
    this.pulseMesh.receiveShadow = true
    this.group.add(this.pulseMesh)
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.pulseTimer = 0
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    this.group.rotation.y = Math.sin(Date.now() * 0.0003) * 0.15

    // Bob scatter points
    const time = Date.now() * 0.003
    this.plots.forEach((plot) => {
      plot.points.forEach((pt, idx) => {
        pt.position.y = pt.originalY + Math.sin(time + idx) * 0.05
      })
    })

    // Pulse sequence progress
    this.pulseTimer += 0.005
    if (this.pulseTimer > 1.0) {
      this.pulseTimer = 0
    }

    const pathCoordinates = [
      new THREE.Vector3(-6, 2.0, 0),
      new THREE.Vector3(-1.5, 2.0, 0),
      new THREE.Vector3(3.0, 2.0, 0),
      new THREE.Vector3(-1.5, -1.8, 0),
      new THREE.Vector3(3.0, -1.8, 0)
    ]

    const numSegments = pathCoordinates.length - 1
    const progress = this.pulseTimer * numSegments
    const segmentIdx = Math.floor(progress)
    const subT = progress - segmentIdx

    this.pulseMesh.position.lerpVectors(
      pathCoordinates[segmentIdx],
      pathCoordinates[segmentIdx + 1],
      subT
    )

    // Scale up active components
    this.plots.forEach((plot, idx) => {
      const isActive = (idx === 0 && segmentIdx === 0) || (idx === 1 && segmentIdx === 2) || (idx === 2 && segmentIdx === 4)
      const targetScale = isActive ? 1.08 : 1.0
      plot.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    })

    this.trees.forEach((tree, idx) => {
      const isActive = (idx === 0 && segmentIdx === 1) || (idx === 1 && segmentIdx === 3)
      const targetScale = isActive ? 1.15 : 1.0
      tree.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    })
  }
}
