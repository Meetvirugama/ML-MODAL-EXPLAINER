# Quick Start Guide - Kaggle Explainer Video

## Get Started in 3 Minutes

### 1. Install Dependencies
```bash
cd kaggle-explainer
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The app opens automatically at `http://localhost:5173`

### 3. See Your Video!
The visualization automatically plays through:
- **INTRO** (0-8s) - Introduction with particles and orbiting objects
- **DECISION TREE** (8-18s) - Tree-based classification
- **RANDOM FOREST** (18-28s) - Ensemble of decision trees
- **LOGISTIC REGRESSION** (28-38s) - Linear classification boundary

Then it loops back to INTRO!

---

## What You'll See

### Visual Elements:
- 🔷 **Cyan particles** - Background animation
- 🔷 **Blue spheres** - Neural network nodes
- 🟢 **Green spheres** - Tree nodes and decision boundaries
- 🌐 **Orbiting objects** - Intro scene dynamics

### Animations:
- ✨ Rotating particles
- 🔄 Orbiting camera
- 💫 Pulsing nodes
- 🌊 Flowing connections

---

## Customize Your Video

### Change Scene Duration
Edit `config.js`:
```javascript
sceneSwitchDuration: 5000, // 5 seconds per scene
```

### Change Colors
Edit `config.js` colors:
```javascript
colors: {
  primary: "#00ff00",   // Change cyan to green
  accent: "#ffff00",    // Change lime to yellow
  cyan: "#00ffff",
  lime: "#ff00ff",
}
```

### Adjust Animation Speed
In component files or `config.js`:
```javascript
animationSpeed: {
  particleRotation: 0.001,  // Faster rotation
  cameraOrbit: 0.01,        // Faster camera movement
}
```

---

## Build for Production

```bash
npm run build
npm run preview
```

Your optimized video will be in the `dist/` folder - ready to share!

---

## Project Files Guide

| File | Purpose |
|------|---------|
| `main.js` | Application entry point |
| `config.js` | All settings and configuration |
| `scenes/sceneManager.js` | Controls which scene plays |
| `scenes/*/` | Individual scene implementations |
| `components/` | Reusable 3D components |
| `animations/` | Camera and animation logic |

---

## Tips for Creating Educational Videos

### For Better Explanations:
1. **Extend scene duration** to give time for explanations (10-15 seconds per scene)
2. **Add scene descriptions** in `config.js`
3. **Record narration** separately and sync with video

### For Screen Recording:
- Use OBS Studio, ScreenFlow (Mac), or Camtasia
- Record at 30fps or 60fps
- Use screen resolution 1920x1080 or 3840x2160 for clarity

### For Video Editing:
1. Record the visualization
2. Add narration in DaVinci Resolve, Adobe Premiere, or similar
3. Add background music
4. Export as MP4 or WebM

---

## Troubleshooting

### "Module not found" error?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Black screen?
- Check browser console (F12) for errors
- Ensure WebGL is enabled in your browser
- Try a different browser

### Slow performance?
- Reduce particle count in `config.js`
- Disable some animations temporarily
- Check your GPU with DevTools > Performance

---

## Next Steps

1. ✅ View the animation running
2. 🎨 Customize colors and settings
3. 📹 Record the screen with narration
4. 🎬 Edit and add music
5. 📤 Share your Kaggle explanation!

---

## Example Narration Structure

**INTRO (0-8s):**
"Welcome to machine learning! Today we'll explore how different algorithms classify data."

**DECISION TREE (8-18s):**
"Decision trees split data into regions using yes/no questions, creating a tree structure."

**RANDOM FOREST (18-28s):**
"Random forests combine many decision trees, voting together for better predictions."

**LOGISTIC REGRESSION (28-38s):**
"Logistic regression finds a smooth boundary between two classes using probability."

---

## Questions?

Check the full README.md for detailed documentation!

Happy creating! 🚀
