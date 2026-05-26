import * as THREE from "three"
import { CONFIG } from "../../config"

export default class CrossValidation {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.blocks = [] // 5x5 array
    this.create()
    scene.add(this.group)
  }

  create() {
    const blockGeometry = new THREE.BoxGeometry(2.0, 0.8, 0.2)

    // 5 Rows (Iterations) x 5 Columns (Folds)
    for (let r = 0; r < 5; r++) {
      const rowBlocks = []
      const yPos = (2 - r) * 1.6

      for (let c = 0; c < 5; c++) {
        const xPos = (c - 2) * 2.3

        // Validation fold is Lime, Training folds are deep blue
        const isValidation = (c === r)
        const color = isValidation ? CONFIG.colors.accent : 0x1c315e

        const material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: 0.8,
          shininess: 60,
          specular: 0x333333
        })

        const block = new THREE.Mesh(blockGeometry, material)
        block.position.set(xPos, yPos, 0)
        block.isValidation = isValidation
        block.rowIdx = r
        block.colIdx = c
        block.castShadow = true
        block.receiveShadow = true

        this.group.add(block)
        rowBlocks.push(block)
      }
      this.blocks.push(rowBlocks)
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
    this.group.rotation.y = Math.sin(Date.now() * 0.0004) * 0.1

    // Cycle active validation row every 1.2 seconds
    const activeRow = Math.floor(Date.now() / 1200) % 5

    for (let r = 0; r < 5; r++) {
      const isActiveRow = (r === activeRow)
      const targetOpacity = isActiveRow ? 1.0 : 0.25
      const targetScale = isActiveRow ? 1.08 : 0.92

      for (let c = 0; c < 5; c++) {
        const block = this.blocks[r][c]
        
        block.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        block.material.opacity = THREE.MathUtils.lerp(block.material.opacity, targetOpacity, 0.1)

        // active row pops with small rotation
        if (isActiveRow) {
          block.rotation.y = Math.sin(Date.now() * 0.003 + c) * 0.15
        } else {
          block.rotation.y = THREE.MathUtils.lerp(block.rotation.y, 0, 0.1)
        }
      }
    }
  }
}