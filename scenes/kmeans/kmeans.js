import * as THREE from "three"
import { CONFIG } from "../../config"

export default class KMeansClustering {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.points = []
    this.centroids = []
    this.centroidTargets = []
    this.centroidOriginals = [
      new THREE.Vector3(-4.0, 3.0, 0),
      new THREE.Vector3(4.0, 2.5, 0),
      new THREE.Vector3(0, -3.5, 0)
    ]
    this.centroidColors = [0xff3355, 0x00ff88, 0x33a6ff]
    this.step = 0
    this.timer = 0
    this.create()
    scene.add(this.group)
  }

  create() {
    const clusterCenters = [
      new THREE.Vector3(-3.5, 1.0, 0),
      new THREE.Vector3(3.5, 1.5, 0),
      new THREE.Vector3(0.5, -2.0, 0)
    ]

    const geom = new THREE.SphereGeometry(0.15, 8, 8)
    const neutralMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 40 })

    clusterCenters.forEach((center, cIdx) => {
      for (let i = 0; i < 18; i++) {
        const mesh = new THREE.Mesh(geom, neutralMaterial.clone())
        const r = Math.random() * 1.6
        const theta = Math.random() * Math.PI * 2
        mesh.position.set(
          center.x + Math.cos(theta) * r,
          center.y + Math.sin(theta) * r,
          (Math.random() - 0.5) * 1.0
        )
        mesh.clusterIdx = cIdx
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.group.add(mesh)
        this.points.push(mesh)
      }
    })

    const centroidGeom = new THREE.SphereGeometry(0.35, 16, 16)
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshPhongMaterial({
        color: this.centroidColors[i],
        shininess: 100,
        specular: 0xffffff,
        transparent: true,
        opacity: 0.95
      })
      const mesh = new THREE.Mesh(centroidGeom, mat)
      mesh.position.copy(this.centroidOriginals[i])
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.group.add(mesh)
      this.centroids.push(mesh)
      this.centroidTargets.push(this.centroidOriginals[i].clone())
    }
  }

  runKMeansStep() {
    this.step++
    if (this.step > 4) {
      this.step = 0
      this.centroids.forEach((c, idx) => {
        c.position.copy(this.centroidOriginals[idx])
        this.centroidTargets[idx].copy(this.centroidOriginals[idx])
      })
      this.points.forEach((p) => {
        p.material.color.setHex(0xcccccc)
      })
      return
    }

    if (this.step === 1 || this.step === 3) {
      // Step A: Assign points
      this.points.forEach((p) => {
        let minDist = 9999
        let bestCentroid = 0
        this.centroids.forEach((c, cIdx) => {
          const dist = p.position.distanceTo(c.position)
          if (dist < minDist) {
            minDist = dist
            bestCentroid = cIdx
          }
        })
        
        p.material.color.setHex(this.centroidColors[bestCentroid])
        p.assignedCentroid = bestCentroid
        p.scale.set(1.4, 1.4, 1.4)
      })
    } else if (this.step === 2 || this.step === 4) {
      // Step B: Move centroids
      const counts = [0, 0, 0]
      const sums = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]

      this.points.forEach((p) => {
        const cIdx = p.assignedCentroid !== undefined ? p.assignedCentroid : p.clusterIdx
        sums[cIdx].add(p.position)
        counts[cIdx]++
      })

      for (let i = 0; i < 3; i++) {
        if (counts[i] > 0) {
          this.centroidTargets[i].copy(sums[i].divideScalar(counts[i]))
        }
      }
    }
  }

  show() {
    this.visible = true
    this.group.visible = true
    this.step = 0
    this.timer = 0
    this.centroids.forEach((c, idx) => {
      c.position.copy(this.centroidOriginals[idx])
      this.centroidTargets[idx].copy(this.centroidOriginals[idx])
    })
    this.points.forEach((p) => {
      p.material.color.setHex(0xcccccc)
      p.scale.set(1, 1, 1)
    })
  }

  hide() {
    this.visible = false
    this.group.visible = false
  }

  update() {
    if (!this.visible) return

    this.group.rotation.y = Math.sin(Date.now() * 0.0005) * 0.2

    this.timer++
    if (this.timer > 90) {
      this.runKMeansStep()
      this.timer = 0
    }

    this.centroids.forEach((c, idx) => {
      c.position.lerp(this.centroidTargets[idx], 0.08)
      
      const time = Date.now() * 0.005
      const s = 1.0 + Math.sin(time + idx) * 0.1
      c.scale.set(s, s, s)
    })

    this.points.forEach((p) => {
      p.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05)
    })
  }
}
