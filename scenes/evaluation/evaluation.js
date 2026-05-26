import * as THREE from "three"
import ConfusionMatrix from "../../components/graphs/confusionMatrix"
import ROCCurve from "../../components/graphs/rocCurve"

export default class Evaluation {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false

    // Confusion Matrix positioned on the left side
    this.matrix = new ConfusionMatrix(this.group, new THREE.Vector3(-3.5, 0, 0))

    // ROC Curve positioned on the right side
    this.roc = new ROCCurve(this.group, new THREE.Vector3(3.5, 0, 0))

    scene.add(this.group)
    this.hide()
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

    // Subtle 3D group rotation for depth
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.15

    this.matrix.update()
    this.roc.update()
  }
}