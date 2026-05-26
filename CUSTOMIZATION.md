# Customization Examples

## 🎨 How to Modify Your Explainer Video

All examples below show how to edit config.js or specific files to customize your video.

---

## 1️⃣ Change the Scene Duration

Make scenes faster or slower.

### Example: 5 seconds per scene
**File:** `config.js`
```javascript
sceneSwitchDuration: 5000,  // Changed from 8000
```

**Result:** Quick pacing, good for fast-paced videos

### Example: 15 seconds per scene  
```javascript
sceneSwitchDuration: 15000,  // Changed from 8000
```

**Result:** Slower pacing, allows time for narration

---

## 2️⃣ Change Colors

Customize the entire color scheme.

### Example: Red and Purple Theme
**File:** `config.js`
```javascript
colors: {
  background: "#0a0a0a",
  primary: "#ff00ff",      // Changed from cyan to magenta
  accent: "#ff0080",       // Changed from lime to hot pink
  cyan: "#ff1493",
  lime: "#ff0000",
}
```

### Example: Gold and Silver Theme
```javascript
colors: {
  background: "#000000",
  primary: "#ffd700",      // Gold
  accent: "#c0c0c0",       // Silver
  cyan: "#ffed4e",         // Bright gold
  lime: "#e8e8e8",         // Off-white
}
```

### Example: Ocean Theme
```javascript
colors: {
  background: "#0a1628",   // Dark blue
  primary: "#00d4ff",      // Bright cyan
  accent: "#2dd4bf",       // Teal
  cyan: "#06b6d4",         // Sky blue
  lime: "#14b8a6",         // Turquoise
}
```

---

## 3️⃣ Change Particle Density

More particles = more visual impact but slower performance.

### Example: Heavy Particle System
**File:** `config.js`
```javascript
particles: {
  count: 10000,     // Changed from 5000
  size: 0.3,
  color: "#4cc9ff",
  opacity: 0.9,     // More visible
}
```

**Result:** Impressive particle cloud, 30-60fps depending on device

### Example: Light Particle System  
```javascript
particles: {
  count: 1000,      // Changed from 5000
  size: 0.5,        // Larger particles (fewer total)
  color: "#4cc9ff",
  opacity: 0.8,
}
```

**Result:** Cleaner look, better performance on mobile

---

## 4️⃣ Modify Neural Network

Change how many nodes and connections appear.

### Example: Sparse Network
**File:** `config.js`
```javascript
neuralNetwork: {
  nodeCount: 20,        // Changed from 60
  connectionCount: 30,  // Changed from 100
  nodeSize: 0.2,
  nodeColor: "#00ffff",
  lineColor: "#4cc9ff",
  lineOpacity: 0.4,
}
```

**Result:** Simpler, cleaner neural network

### Example: Dense Network
```javascript
neuralNetwork: {
  nodeCount: 100,       // Changed from 60
  connectionCount: 200, // Changed from 100
  nodeSize: 0.1,        // Smaller nodes
  nodeColor: "#ff00ff", // Different color
  lineColor: "#ffff00",
  lineOpacity: 0.5,
}
```

**Result:** Complex, highly connected network

---

## 5️⃣ Add More Scenes

Create a completely new scene for a 5th algorithm.

### Step 1: Create the file
**File:** `scenes/neuralNet/neuralNet.js`
```javascript
import * as THREE from "three"
import { CONFIG } from "../../config"

export default class NeuralNetScene {
  constructor(scene) {
    this.scene = scene
    this.group = new THREE.Group()
    this.visible = false
    this.create()
    scene.add(this.group)
  }

  create() {
    // Create your visualization here
    // Example: Create a simple cube
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({
      color: CONFIG.colors.primary,
    })
    const cube = new THREE.Mesh(geometry, material)
    this.group.add(cube)
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
    this.group.rotation.x += 0.005
    this.group.rotation.y += 0.005
  }
}
```

### Step 2: Update config.js
```javascript
scenes: [
  { name: "INTRO", duration: 8000, description: "Introduction" },
  { name: "DECISION_TREE", duration: 10000, description: "Decision Tree" },
  { name: "RANDOM_FOREST", duration: 10000, description: "Random Forest" },
  { name: "LOGISTIC", duration: 10000, description: "Logistic Regression" },
  { name: "NEURAL_NET", duration: 10000, description: "Neural Network" }, // NEW
]
```

### Step 3: Update main.js
```javascript
import NeuralNetScene from "./scenes/neuralNet/neuralNet"

// In initialization section:
const neuralNetScene = new NeuralNetScene(scene)
neuralNetScene.hide()

// In animation loop:
if (currentSceneName === "NEURAL_NET") {
  neuralNetScene.show()
} else {
  neuralNetScene.hide()
}
```

---

## 6️⃣ Change Animation Speed

Make everything move faster or slower.

### Example: Fast Animations
**File:** Modify individual scene files

In `scenes/decisionTree/decisionTree.js`:
```javascript
update() {
  this.group.rotation.z += 0.005  // Changed from 0.001
  // ...
}
```

### Example: Slow Animations
```javascript
update() {
  this.group.rotation.z += 0.0001  // Changed from 0.001
  // ...
}
```

---

## 7️⃣ Customize Scene Order

Rearrange which scene plays first, second, etc.

### Example: Start with Random Forest
**File:** `config.js`
```javascript
scenes: [
  { name: "RANDOM_FOREST", duration: 10000, description: "Random Forest" },
  { name: "DECISION_TREE", duration: 10000, description: "Decision Tree" },
  { name: "INTRO", duration: 8000, description: "Introduction" },
  { name: "LOGISTIC", duration: 10000, description: "Logistic Regression" },
]
```

**Result:** Video now starts with Random Forest instead of Intro

---

## 8️⃣ Add Text Labels

Add explanatory text on scenes.

### Create a Label Component
**File:** `components/ui/textLabel.js`
```javascript
export default class TextLabel {
  constructor(text, position) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = 512
    canvas.height = 256

    context.fillStyle = "#4cc9ff"
    context.font = "48px Arial"
    context.fillText(text, 10, 100)

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.MeshBasicMaterial({ map: texture })
    const geometry = new THREE.PlaneGeometry(4, 2)
    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.position.copy(position)
  }

  getMesh() {
    return this.mesh
  }
}
```

### Use in a Scene
```javascript
import TextLabel from "../../components/ui/textLabel"

const label = new TextLabel("Decision Tree", new THREE.Vector3(0, 5, 0))
this.group.add(label.getMesh())
```

---

## 9️⃣ Change Camera Movement

Customize how the camera moves through scenes.

### Current: Orbiting Camera
**File:** `animations/cameraAnimations.js`
```javascript
update() {
  this.time += 0.005

  // Orbit movement
  this.camera.position.x = Math.sin(this.time) * 8
  this.camera.position.z = 20 + Math.cos(this.time) * 5

  // Smooth up-down movement
  this.camera.position.y = Math.sin(this.time * 0.5) * 3

  this.camera.lookAt(new THREE.Vector3(0, 0, 0))
}
```

### Alternative: Zoom In/Out
```javascript
update() {
  this.time += 0.005

  // Zoom effect
  const zoom = 20 + Math.sin(this.time) * 10
  this.camera.position.z = zoom

  this.camera.lookAt(new THREE.Vector3(0, 0, 0))
}
```

### Alternative: Circular Spiral
```javascript
update() {
  this.time += 0.005

  this.camera.position.x = Math.sin(this.time) * (10 + this.time * 0.5)
  this.camera.position.y = Math.cos(this.time) * (10 + this.time * 0.5)
  this.camera.position.z = 20 + this.time * 2

  this.camera.lookAt(new THREE.Vector3(0, 0, 0))
}
```

---

## 🔟 Create Custom Background

Instead of using particles, add a gradient or pattern.

### Custom Gradient Background
**File:** `main.js`
```javascript
// Replace the particle system with a gradient

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
gradient.addColorStop(0, '#000033')
gradient.addColorStop(0.5, '#000066')
gradient.addColorStop(1, '#000033')

ctx.fillStyle = gradient
ctx.fillRect(0, 0, canvas.width, canvas.height)

const texture = new THREE.CanvasTexture(canvas)
scene.background = texture
```

---

## 📊 Complete Example: Kaggle-Themed Colors

Create a visualization with Kaggle brand colors.

**File:** `config.js`
```javascript
colors: {
  background: "#1a1a1a",
  primary: "#20c997",      // Kaggle green
  accent: "#ffa500",       // Kaggle orange
  cyan: "#00d4ff",
  lime: "#20c997",
}

particles: {
  count: 5000,
  size: 0.25,
  color: "#20c997",
  opacity: 0.7,
}

neuralNetwork: {
  nodeCount: 50,
  connectionCount: 80,
  nodeSize: 0.2,
  nodeColor: "#ffa500",
  lineColor: "#20c997",
  lineOpacity: 0.4,
}
```

---

## 🎯 Quick Customization Checklist

- [ ] Change `sceneSwitchDuration` for pacing
- [ ] Update `colors` object for theme
- [ ] Adjust `particles.count` for density
- [ ] Modify neural network settings
- [ ] Edit scene durations individually
- [ ] Add new scenes if needed
- [ ] Change camera animations
- [ ] Add text labels
- [ ] Test and record

---

## 💾 Save Your Customizations

After making changes:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# See results in dist/ folder
ls dist/
```

---

**Tip:** Make small changes one at a time and test with `npm run dev` to see results instantly!
