# Deployment & Export Guide

## 📹 Recording Your Video

### Option 1: Built-in Screen Recording (Mac)

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the app at `http://localhost:5173`

3. Hit Cmd+Shift+5 on Mac:
   - Select "Record selected portion"
   - Select your browser window
   - Click record

4. Let the animation run for ~40 seconds (full cycle)

5. Save and edit in iMovie or other video editor

### Option 2: OBS Studio (All Platforms)

1. Download [OBS Studio](https://obsproject.com/)

2. Create a new Scene and add:
   - Source → Window Capture → Select browser
   - Select 1920x1080 resolution
   - 30fps or 60fps framerate

3. Click Record and run the app

4. Edit video in OBS or export to video editor

### Option 3: ScreenFlow (Mac Only)

1. Download ScreenFlow

2. Create new recording, select app window

3. Set resolution to 1920x1080

4. Hit record and start the app

5. Use ScreenFlow's built-in editor

---

## 🌐 Deploying Online

### Option 1: Vercel (Recommended - Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
npm run build

# Deploy
vercel
```

Your app will be live at `yourproject.vercel.app`

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Push to GitHub

2. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/kaggle-explainer/', // Your repo name
  // ... rest of config
})
```

3. Build and enable GitHub Pages in repo settings

---

## 📦 Creating a Shareable File

### Generate standalone HTML

1. Build the project:
```bash
npm run build
```

2. Create a single HTML file with embedded assets:
```bash
# Install inlineAssets
npm install -g inline-assets

# Inline everything
inline-assets dist/index.html -o standalone.html
```

3. Share `standalone.html` - works anywhere without server!

---

## 🎬 Adding Audio Narration

### In DaVinci Resolve:

1. Import your video file (from OBS recording)

2. Add audio tracks:
   - File → Import → Audio
   - Add background music
   - Add narration

3. Sync timing:
   - Trim video/audio as needed
   - Adjust speeds if necessary

4. Export:
   - File → Export Video
   - Format: MP4 H.264
   - Resolution: 1920x1080
   - Framerate: 30fps

### In Adobe Premiere:

1. File → New → Project
2. Import your screen recording
3. Add audio tracks for narration and music
4. Adjust timing in timeline
5. File → Export → Media Encoder → MP4

---

## 🚀 YouTube Upload

### Prepare your video:
- Resolution: 1920x1080 (1080p)
- Framerate: 30fps or 60fps
- Format: MP4 with H.264 codec
- Duration: 40 seconds - 10 minutes

### Upload steps:
1. Go to YouTube Studio
2. Click "Create" → "Upload video"
3. Select your MP4 file
4. Add title: "Kaggle Contest - [Algorithm] Explanation"
5. Add description with links to repo
6. Set thumbnail (generate or upload)
7. Add tags: "machine learning", "kaggle", "education"
8. Choose visibility (Unlisted, Public, or Private)
9. Click "Publish"

---

## 📊 Sharing Options

### Share on Kaggle:
1. Go to Kaggle.com
2. Create a notebook or competition discussion post
3. Embed YouTube video or share link
4. Link to your GitHub repo

### Share on Twitter/X:
```
Just created an ML explainer video! Watch Decision Trees, 
Random Forests, and Logistic Regression in action 🔷🌳🌳

Built with Three.js + Vite
GitHub: [link]
Video: [YouTube link]

#Kaggle #MachineLearning #Education
```

### Share on LinkedIn:
```
Creating educational content about machine learning? 
I built a 3D visualization tool to explain ML algorithms 
used in Kaggle competitions.

🔷 Neural Networks
🌳 Decision Trees
🌳🌳 Random Forests
📊 Logistic Regression

Open source & customizable!
[GitHub Link]
```

---

## 🎨 Creating Thumbnails

### Using Figma (Free):

1. New file, 1280x720 canvas

2. Add elements:
   - Background: Dark gradient
   - Title: "Machine Learning Explained" (bold)
   - Graphics: 3D cube or circuit pattern
   - Colors: Use cyan (#4cc9ff) and lime (#00ff88)

3. Export as PNG

### Using Canva:

1. Create new design, 1280x720
2. Search for "tech", "machine learning" templates
3. Customize with your colors and text
4. Download as PNG

---

## 📈 Video Statistics

### Typical Performance:
- View duration: Viewers watch 80-90% of educational content
- Engagement rate: 5-15% likes/comments
- Click-through rate: 3-8% to GitHub repo

### Tips for More Views:
1. Add captions (YouTube auto-generate, then edit)
2. Create engaging thumbnail
3. Write detailed description with timestamps
4. Use relevant tags and keywords
5. Share on multiple platforms
6. Engage with similar content

---

## 🔧 Advanced Customizations

### Custom Resolution:

Edit `main.js`:
```javascript
renderer.setSize(1920, 1080) // 1080p
renderer.setPixelRatio(1) // No scaling
```

### Higher Quality Particles:

Edit `config.js`:
```javascript
particles: {
  count: 10000, // More particles
  size: 0.3,    // Larger particles
}
```

### Slower Animation:

Edit `config.js`:
```javascript
sceneSwitchDuration: 15000, // 15 seconds per scene
```

---

## 📋 Checklist Before Sharing

- [ ] Video is 40+ seconds (at least one full cycle)
- [ ] Audio is clear (narration + background music)
- [ ] Resolution is 1080p minimum
- [ ] Colors are vibrant and visible
- [ ] Text captions added (if needed)
- [ ] Thumbnail is professional looking
- [ ] Description includes code repo link
- [ ] Tags include relevant keywords
- [ ] Video is shareable (not private)

---

## 🎓 Example Videos You Can Create

1. **"Decision Trees Explained in 60 Seconds"**
2. **"How Random Forests Win Kaggle Competitions"**
3. **"Logistic Regression: From Math to Visualization"**
4. **"Machine Learning Algorithms Compared"**
5. **"My Kaggle Winning Solution Explained"**

---

## Support

For issues with deployment or recording:
1. Check the main README.md
2. Open a GitHub issue with details
3. Include your browser and OS version

Happy sharing! 🚀
