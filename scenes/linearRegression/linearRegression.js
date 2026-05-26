import * as THREE from "three"
import { CONFIG } from "../../config"

export default class LinearRegression {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.errorLines = []
    this.currentSlope = -0.5
    this.currentIntercept = -2.0
    this.targetSlope = 0.8
    this.targetIntercept = 0.5
    this.create()
    scene.add(this.group)
  }

  create() {
    // Generate scattered points along y = 0.8x + 0.5 + noise
    const count = 30
    const pointGeom = new THREE.SphereGeometry(0.15, 8, 8)
    const pointMat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.cyan, shininess: 80, specular: 0xffffff })

    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * 0.4 // x from -6 to 6
      const noise = (Math.random() - 0.5) * 1.5
      const y = this.targetSlope * x + this.targetIntercept + noise
      
      const pt = new THREE.Mesh(pointGeom, pointMat)
      pt.position.set(x, y, 0)
      pt.castShadow = true
      pt.receiveShadow = true
      this.group.add(pt)
      this.points.push(pt)
    }

    // Regression Line
    const lineGeom = new THREE.BufferGeometry()
    this.updateLineGeometry(lineGeom, this.currentSlope, this.currentIntercept)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xff0055,
      linewidth: 3,
      transparent: true,
      opacity: 0.9
    })
    this.regressionLine = new THREE.Line(lineGeom, lineMat)
    this.group.add(this.regressionLine)

    // Error bars (vertical line segments from points to regression line)
    this.points.forEach((pt) => {
      const lineY = this.currentSlope * pt.position.x + this.currentIntercept
      const pts = [pt.position, new THREE.Vector3(pt.position.x, lineY, 0)]
      const geom = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineDashedMaterial({
        color: 0xffaa00,
        dashSize: 0.2,
        gapSize: 0.2,
        transparent: true,
        opacity: 0.6
      })
      const errLine = new THREE.Line(geom, mat)
      errLine.computeLineDistances()
      this.group.add(errLine)
      this.errorLines.push(errLine)
    })
  }

  updateLineGeometry(geometry, m, c) {
    const x1 = -6.5
    const y1 = m * x1 + c
    const x2 = 6.5
    const y2 = m * x2 + c
    const points = [new THREE.Vector3(x1, y1, 0), new THREE.Vector3(x2, y2, 0)]
    geometry.setFromPoints(points)
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.currentSlope = -0.5
    this.currentIntercept = -2.0
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    // Slowly fit regression line
    const learningRate = 0.02
    this.currentSlope += (this.targetSlope - this.currentSlope) * learningRate
    this.currentIntercept += (this.targetIntercept - this.currentIntercept) * learningRate

    // Update regression line geometry
    this.updateLineGeometry(this.regressionLine.geometry, this.currentSlope, this.currentIntercept)
    this.regressionLine.geometry.attributes.position.needsUpdate = true

    // Update error bars and color
    const errorDistance = Math.abs(this.targetSlope - this.currentSlope) + Math.abs(this.targetIntercept - this.currentIntercept)
    
    if (errorDistance < 0.1) {
      this.regressionLine.material.color.setHex(0x00ff88) // Finished fit
    } else {
      const factor = Math.min(1, 1 - errorDistance / 2)
      this.regressionLine.material.color.setRGB(1 - factor, factor, factor)
    }

    this.points.forEach((pt, idx) => {
      const lineY = this.currentSlope * pt.position.x + this.currentIntercept
      const start = pt.position
      const end = new THREE.Vector3(pt.position.x, lineY, 0)
      
      const errLine = this.errorLines[idx]
      const geom = errLine.geometry
      const positions = [start, end]
      geom.setFromPoints(positions)
      geom.attributes.position.needsUpdate = true
      errLine.computeLineDistances()

      // Shrink error bar opacity as training fits
      errLine.material.opacity = Math.max(0.15, errorDistance * 0.4)
    })
  }
}
