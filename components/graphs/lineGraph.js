import * as THREE from "three"

export default class LineGraph {
  constructor(parentGroup, position) {
    this.parentGroup = parentGroup
    this.position = position
    this.group = new THREE.Group()
    this.group.position.copy(position)
    this.linePoints = []
    this.progress = 0
    this.create()
    this.parentGroup.add(this.group)
  }

  create() {
    // Render Axes
    const xAxisGeom = new THREE.BoxGeometry(6.0, 0.05, 0.05)
    const yAxisGeom = new THREE.BoxGeometry(0.05, 4.5, 0.05)
    const axisMat = new THREE.MeshPhongMaterial({ color: 0x888888 })

    const xAxis = new THREE.Mesh(xAxisGeom, axisMat)
    xAxis.position.set(0, -2.0, 0)
    this.group.add(xAxis)

    const yAxis = new THREE.Mesh(yAxisGeom, axisMat)
    yAxis.position.set(-3.0, 0.25, 0)
    this.group.add(yAxis)

    // Magenta Curve
    const curveMat = new THREE.LineBasicMaterial({
      color: 0xff00ff,
      linewidth: 3
    })
    const curveGeom = new THREE.BufferGeometry()
    this.curveLine = new THREE.Line(curveGeom, curveMat)
    this.group.add(this.curveLine)

    // Tracking dot
    const dotGeom = new THREE.SphereGeometry(0.12, 8, 8)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    this.pulseDot = new THREE.Mesh(dotGeom, dotMat)
    this.pulseDot.position.set(-3.0, 2.0, 0.02)
    this.group.add(this.pulseDot)
  }

  update() {
    this.progress += 0.01

    if (this.progress > 1.0) {
      this.progress = 0
      this.linePoints = []
    }

    const t = this.progress
    const x = -3.0 + t * 6.0
    const y = -2.0 + Math.pow(Math.E, -3.0 * t) * 4.0

    const currentPt = new THREE.Vector3(x, y, 0.01)
    this.linePoints.push(currentPt)

    const geom = new THREE.BufferGeometry().setFromPoints(this.linePoints)
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
