import * as THREE from "three"
import { CONFIG } from "../../config"

export default class NaiveBayesScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.create()
    scene.add(this.group)
  }

  calculateGaussianY(x, mu, sigma, height, baseline) {
    return baseline + height * Math.exp(-Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2)))
  }

  createCurveGeometry(mu, sigma, height, baseline) {
    const points = []
    const step = 0.1
    for (let x = -8; x <= 8; x += step) {
      const y = this.calculateGaussianY(x, mu, sigma, height, baseline)
      points.push(new THREE.Vector3(x, y, 0))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }

  create() {
    this.baselineY = -2.0
    this.heightVal = 4.0
    this.sigmaVal = 1.6
    this.muA = -2.2
    this.muB = 2.2

    // Baseline axis
    const axisGeom = new THREE.BoxGeometry(16.0, 0.05, 0.05)
    const axisMat = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 30 })
    const axis = new THREE.Mesh(axisGeom, axisMat)
    axis.position.y = this.baselineY
    axis.castShadow = true
    axis.receiveShadow = true
    this.group.add(axis)

    // Class A Gaussian (Cyan)
    const curveAGeom = this.createCurveGeometry(this.muA, this.sigmaVal, this.heightVal, this.baselineY)
    const curveAMat = new THREE.LineBasicMaterial({ color: CONFIG.colors.cyan, linewidth: 3 })
    this.curveA = new THREE.Line(curveAGeom, curveAMat)
    this.group.add(this.curveA)

    // Class B Gaussian (Lime)
    const curveBGeom = this.createCurveGeometry(this.muB, this.sigmaVal, this.heightVal, this.baselineY)
    const curveBMat = new THREE.LineBasicMaterial({ color: CONFIG.colors.accent, linewidth: 3 })
    this.curveB = new THREE.Line(curveBGeom, curveBMat)
    this.group.add(this.curveB)

    // Query Line
    const queryPoints = [new THREE.Vector3(0, -3.0, 0), new THREE.Vector3(0, 5.0, 0)]
    const queryGeom = new THREE.BufferGeometry().setFromPoints(queryPoints)
    const queryMat = new THREE.LineDashedMaterial({
      color: 0xffffff,
      dashSize: 0.2,
      gapSize: 0.2
    })
    this.queryLine = new THREE.Line(queryGeom, queryMat)
    this.queryLine.computeLineDistances()
    this.group.add(this.queryLine)

    // Intersection A
    const dotGeom = new THREE.SphereGeometry(0.18, 12, 12)
    const dotAMat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.cyan, shininess: 80, specular: 0xffffff })
    this.intersectionDotA = new THREE.Mesh(dotGeom, dotAMat)
    this.intersectionDotA.castShadow = true
    this.intersectionDotA.receiveShadow = true
    this.group.add(this.intersectionDotA)

    // Intersection B
    const dotBMat = new THREE.MeshPhongMaterial({ color: CONFIG.colors.accent, shininess: 80, specular: 0xffffff })
    this.intersectionDotB = new THREE.Mesh(dotGeom, dotBMat)
    this.intersectionDotB.castShadow = true
    this.intersectionDotB.receiveShadow = true
    this.group.add(this.intersectionDotB)

    this.queryX = 0
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

    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    // Query line sweeps back and forth
    this.queryX = Math.sin(Date.now() * 0.0012) * 4.5
    this.queryLine.position.x = this.queryX

    const yA = this.calculateGaussianY(this.queryX, this.muA, this.sigmaVal, this.heightVal, this.baselineY)
    const yB = this.calculateGaussianY(this.queryX, this.muB, this.sigmaVal, this.heightVal, this.baselineY)

    this.intersectionDotA.position.set(this.queryX, yA, 0.02)
    this.intersectionDotB.position.set(this.queryX, yB, 0.02)

    // Scale represents likelihood height
    const scaleA = 0.5 + (yA - this.baselineY) / this.heightVal * 1.5
    const scaleB = 0.5 + (yB - this.baselineY) / this.heightVal * 1.5

    this.intersectionDotA.scale.set(scaleA, scaleA, scaleA)
    this.intersectionDotB.scale.set(scaleB, scaleB, scaleB)
  }
}
