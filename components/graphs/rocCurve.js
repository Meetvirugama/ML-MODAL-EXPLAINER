import * as THREE from "three"

export default class ROCCurve {
  constructor(parentGroup, position) {
    this.parentGroup = parentGroup
    this.position = position
    this.group = new THREE.Group()
    this.group.position.copy(position)
    this.curvePoints = []
    this.progress = 0
    this.create()
    this.parentGroup.add(this.group)
  }

  create() {
    // Render Axes
    const xAxisGeom = new THREE.BoxGeometry(6.0, 0.05, 0.05)
    const yAxisGeom = new THREE.BoxGeometry(0.05, 5.0, 0.05)
    const axisMat = new THREE.MeshPhongMaterial({ color: 0x888888 })

    const xAxis = new THREE.Mesh(xAxisGeom, axisMat)
    xAxis.position.set(0, -2.5, 0)
    this.group.add(xAxis)

    const yAxis = new THREE.Mesh(yAxisGeom, axisMat)
    yAxis.position.set(-3.0, 0, 0)
    this.group.add(yAxis)

    // Diagonal Random Guess line
    const baselinePts = [
      new THREE.Vector3(-3.0, -2.5, 0),
      new THREE.Vector3(3.0, 2.5, 0)
    ]
    const baselineGeom = new THREE.BufferGeometry().setFromPoints(baselinePts)
    const baselineMat = new THREE.LineDashedMaterial({
      color: 0x555555,
      dashSize: 0.2,
      gapSize: 0.2
    })
    const baseline = new THREE.Line(baselineGeom, baselineMat)
    baseline.computeLineDistances()
    this.group.add(baseline)

    // Glowing Curve Line
    const curveMat = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      linewidth: 3
    })
    const curveGeom = new THREE.BufferGeometry()
    this.curveLine = new THREE.Line(curveGeom, curveMat)
    this.group.add(this.curveLine)

    // Pulsing threshold tracker dot
    const dotGeom = new THREE.SphereGeometry(0.12, 8, 8)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    this.pulseDot = new THREE.Mesh(dotGeom, dotMat)
    this.pulseDot.position.set(-3.0, -2.5, 0.02)
    this.group.add(this.pulseDot)
  }

  update() {
    this.progress += 0.015

    if (this.progress > 1.0) {
      this.progress = 0
      this.curvePoints = []
    }

    const t = this.progress
    const x = -3.0 + t * 6.0
    const normY = Math.pow(t, 0.35)
    const y = -2.5 + normY * 5.0

    const currentPt = new THREE.Vector3(x, y, 0.01)
    this.curvePoints.push(currentPt)

    const geom = new THREE.BufferGeometry().setFromPoints(this.curvePoints)
    this.curveLine.geometry.dispose()
    this.curveLine.geometry = geom

    this.pulseDot.position.copy(currentPt)
    
    const scale = 1.0 + Math.sin(Date.now() * 0.01) * 0.2
    this.pulseDot.scale.set(scale, scale, 1)
  }

  destroy() {
    this.parentGroup.remove(this.group)
    this.curveLine.geometry.dispose()
    this.curveLine.material.dispose()
    this.pulseDot.geometry.dispose()
    this.pulseDot.material.dispose()
  }
}
