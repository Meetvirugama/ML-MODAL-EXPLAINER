import * as THREE from "three"
import { CONFIG } from "../../config"

export default class RegularizationScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.ellipses = []
    this.create()
    scene.add(this.group)
  }

  createEllipseGeometry(centerX, centerY, radiusX, radiusY) {
    const points = []
    const steps = 64
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * Math.PI * 2
      points.push(new THREE.Vector3(
        centerX + Math.cos(theta) * radiusX,
        centerY + Math.sin(theta) * radiusY,
        0
      ))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }

  create() {
    // RIDGE L2 (Circular constraint) - Left side (-3.5, 0.5)
    this.ridgePos = new THREE.Vector3(-3.5, 0.5, 0)
    
    const ridgeAxes = new THREE.Group()
    ridgeAxes.position.copy(this.ridgePos)
    const axisH = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.04, 0.04), new THREE.MeshPhongMaterial({ color: 0x555555, shininess: 20 }))
    const axisV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 4.0, 0.04), new THREE.MeshPhongMaterial({ color: 0x555555, shininess: 20 }))
    axisH.castShadow = true
    axisH.receiveShadow = true
    axisV.castShadow = true
    axisV.receiveShadow = true
    ridgeAxes.add(axisH)
    ridgeAxes.add(axisV)
    this.group.add(ridgeAxes)

    // L2 Constraint Circle
    const circleGeom = new THREE.RingGeometry(0.01, 1.2, 32)
    const circleMat = new THREE.MeshPhongMaterial({
      color: 0x1f3460,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
      shininess: 30
    })
    const circle = new THREE.Mesh(circleGeom, circleMat)
    circle.position.copy(this.ridgePos)
    circle.castShadow = true
    circle.receiveShadow = true
    this.group.add(circle)

    const circleBorderGeom = new THREE.RingGeometry(1.17, 1.2, 32)
    const circleBorderMat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.cyan, side: THREE.DoubleSide, shininess: 50 })
    const circleBorder = new THREE.Mesh(circleBorderGeom, circleBorderMat)
    circleBorder.position.copy(this.ridgePos)
    circleBorder.position.z = 0.01
    circleBorder.castShadow = true
    circleBorder.receiveShadow = true
    this.group.add(circleBorder)

    // LASSO L1 (Diamond constraint) - Right side (3.5, 0.5)
    this.lassoPos = new THREE.Vector3(3.5, 0.5, 0)

    const lassoAxes = new THREE.Group()
    lassoAxes.position.copy(this.lassoPos)
    const axisH2 = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.04, 0.04), new THREE.MeshPhongMaterial({ color: 0x555555, shininess: 20 }))
    const axisV2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 4.0, 0.04), new THREE.MeshPhongMaterial({ color: 0x555555, shininess: 20 }))
    axisH2.castShadow = true
    axisH2.receiveShadow = true
    axisV2.castShadow = true
    axisV2.receiveShadow = true
    lassoAxes.add(axisH2)
    lassoAxes.add(axisV2)
    this.group.add(lassoAxes)

    // L1 Constraint Diamond
    const diamondGeom = new THREE.BoxGeometry(1.7, 1.7, 0.02)
    const diamondMat = new THREE.MeshStandardMaterial({
      color: 0x4d163d,
      roughness: 0.4,
      metalness: 0.2,
      transparent: true,
      opacity: 0.6
    })
    const diamond = new THREE.Mesh(diamondGeom, diamondMat)
    diamond.position.copy(this.lassoPos)
    diamond.rotation.z = Math.PI / 4
    diamond.castShadow = true
    diamond.receiveShadow = true
    this.group.add(diamond)

    // Diamond border lines
    const borderPoints = [
      new THREE.Vector3(0, 1.2, 0.01),
      new THREE.Vector3(1.2, 0, 0.01),
      new THREE.Vector3(0, -1.2, 0.01),
      new THREE.Vector3(-1.2, 0, 0.01),
      new THREE.Vector3(0, 1.2, 0.01)
    ]
    const borderGeom = new THREE.BufferGeometry().setFromPoints(borderPoints)
    const borderMat = new THREE.LineBasicMaterial({ color: 0xff00ff, linewidth: 2 })
    this.diamondBorder = new THREE.Line(borderGeom, borderMat)
    this.diamondBorder.position.copy(this.lassoPos)
    this.group.add(this.diamondBorder)

    // Centers of contours
    this.ridgeLossCenter = new THREE.Vector3(-3.5 + 2.0, 0.5 + 1.8, 0.02)
    this.lassLossCenter = new THREE.Vector3(3.5 + 2.2, 0.5 + 1.6, 0.02)

    this.ridgeEllipseMat = new THREE.LineBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.6 })
    this.lassoEllipseMat = new THREE.LineBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.6 })

    // Intersection touch points
    const dotGeom = new THREE.SphereGeometry(0.12, 8, 8)
    this.ridgeTouchPoint = new THREE.Mesh(dotGeom, new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 100, specular: 0xffffff }))
    const ridgeTouchPos = new THREE.Vector3(-3.5 + 1.2 * Math.cos(Math.PI/6), 0.5 + 1.2 * Math.sin(Math.PI/6), 0.05)
    this.ridgeTouchPoint.position.copy(ridgeTouchPos)
    this.ridgeTouchPoint.castShadow = true
    this.ridgeTouchPoint.receiveShadow = true
    this.group.add(this.ridgeTouchPoint)

    this.lassoTouchPoint = new THREE.Mesh(dotGeom, new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 100, specular: 0xffffff }))
    const lassoTouchPos = new THREE.Vector3(3.5 + 1.2, 0.5, 0.05)
    this.lassoTouchPoint.position.copy(lassoTouchPos)
    this.lassoTouchPoint.castShadow = true
    this.lassoTouchPoint.receiveShadow = true
    this.group.add(this.lassoTouchPoint)

    this.animTime = 0
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.animTime = 0
  }

  hide() {
    this.visible = false
    this.group.visible = false
    this.ellipses.forEach(e => this.group.remove(e))
    this.ellipses = []
  }

  update() {
    if (!this.visible) return

    this.group.rotation.y = Math.sin(Date.now() * 0.0003) * 0.15

    this.animTime += 0.008
    if (this.animTime > 1.0) {
      this.animTime = 0
    }

    this.ellipses.forEach(e => this.group.remove(e))
    this.ellipses = []

    const t = this.animTime
    
    const maxRadiusRidgeX = 2.4 * t
    const maxRadiusRidgeY = 1.6 * t
    const maxRadiusLassoX = 2.5 * t
    const maxRadiusLassoY = 1.8 * t

    for (let i = 1; i <= 3; i++) {
      const factor = i / 3
      const rGeom = this.createEllipseGeometry(
        this.ridgeLossCenter.x, this.ridgeLossCenter.y,
        maxRadiusRidgeX * factor, maxRadiusRidgeY * factor
      )
      const rLine = new THREE.Line(rGeom, this.ridgeEllipseMat)
      this.group.add(rLine)
      this.ellipses.push(rLine)

      const lGeom = this.createEllipseGeometry(
        this.lassLossCenter.x, this.lassLossCenter.y,
        maxRadiusLassoX * factor, maxRadiusLassoY * factor
      )
      const lLine = new THREE.Line(lGeom, this.lassoEllipseMat)
      this.group.add(lLine)
      this.ellipses.push(lLine)
    }

    const isTouching = t > 0.7 && t < 0.95
    const scale = isTouching ? 1.5 + Math.sin(Date.now() * 0.015) * 0.2 : 1.0
    this.ridgeTouchPoint.scale.set(scale, scale, scale)
    this.lassoTouchPoint.scale.set(scale, scale, scale)

    this.ridgeTouchPoint.material.color.setHex(isTouching ? 0x00ff88 : 0xffaa00)
    this.lassoTouchPoint.material.color.setHex(isTouching ? 0x00ff88 : 0xffaa00)
  }
}
