import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { CONFIG } from "./config.js"

import ParticleSystem from "./components/particles/particleSystem.js"
import NeuralNetwork from "./components/neuralNetwork/neuralNetwork.js"
import CameraAnimation from "./animations/cameraAnimations.js"
import SceneManager from "./scenes/sceneManager.js"
import VideoRecorder from "./recorder/mediaRecorder.js"
import TransitionAnimations from "./animations/transitionAnimations.js"
import NarratorEngine from "./narrator/narratorEngine.js"

// Import all scenes
import IntroScene from "./scenes/intro/intro.js"
import DecisionTree from "./scenes/decisionTree/decisionTree.js"
import RandomForest from "./scenes/randomForest/randomForest.js"
import LogisticRegression from "./scenes/logisticRegression/logistic.js"
import RegularizationScene from "./scenes/regularization/regularization.js"
import BiasVariance from "./scenes/biasVariance/biasVariance.js"
import CrossValidation from "./scenes/crossValidation/crossValidation.js"
import Evaluation from "./scenes/evaluation/evaluation.js"
import Ending from "./scenes/ending/ending.js"
import KagglePipeline from "./scenes/kaggle/kaggle.js"
import NeuralNetworkScene from "./scenes/neuralNetworkScene/neuralNetworkScene.js"
import XGBoostScene from "./scenes/xgboost/xgboost.js"
import LinearRegression from "./scenes/linearRegression/linearRegression.js"
import SupportVectorMachine from "./scenes/svm/svm.js"
import KNearestNeighbors from "./scenes/knn/knn.js"
import NaiveBayesScene from "./scenes/naiveBayes/naiveBayes.js"
import KMeansClustering from "./scenes/kmeans/kmeans.js"
import PCAVisual from "./scenes/pca/pca.js"

// ─── THREE.JS SETUP ──────────────────────────────────────────────────────────

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x030511)

const camera = new THREE.PerspectiveCamera(
  CONFIG.camera.fov || 75,
  window.innerWidth / window.innerHeight,
  CONFIG.camera.near || 0.1,
  CONFIG.camera.far || 1000
)
camera.position.z = CONFIG.camera.defaultZ || 20

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#scene"),
  antialias: true,
  alpha: false,
  // REQUIRED for canvas.captureStream() to record non-black frames.
  // Without this, WebGL clears the framebuffer after every render()
  // and captureStream() only captures empty/black frames.
  preserveDrawingBuffer: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.35)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
dirLight.position.set(15, 20, 15)
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 2048
dirLight.shadow.mapSize.height = 2048
dirLight.shadow.camera.near = 0.5
dirLight.shadow.camera.far = 100
const d = 25
dirLight.shadow.camera.left = -d
dirLight.shadow.camera.right = d
dirLight.shadow.camera.top = d
dirLight.shadow.camera.bottom = -d
dirLight.shadow.bias = -0.0005
scene.add(dirLight)

const spotlight = new THREE.SpotLight(0x00ffff, 3, 40, Math.PI / 4, 0.5, 1)
spotlight.position.set(-10, 15, 10)
spotlight.castShadow = true
spotlight.shadow.mapSize.width = 1024
spotlight.shadow.mapSize.height = 1024
scene.add(spotlight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.maxDistance = 50
controls.minDistance = 2

// ─── CORE COMPONENTS ────────────────────────────────────────────────────────

const particles = new ParticleSystem(scene)
const network = new NeuralNetwork(scene)
const cameraAnimation = new CameraAnimation(camera)
const sceneManager = new SceneManager()
const recorder = new VideoRecorder(renderer.domElement)
const transitions = new TransitionAnimations()

// ★ THE NEW NARRATOR ENGINE — drives all speech and subtitles
const narrator = new NarratorEngine()

// ─── ALL 3D SCENES ──────────────────────────────────────────────────────────

const scenes = {
  INTRO:            new IntroScene(scene),
  KAGGLER_PIPELINE: new KagglePipeline(scene),
  BIAS_VARIANCE:    new BiasVariance(scene),
  CROSS_VALIDATION: new CrossValidation(scene),
  LINEAR_REGRESSION:new LinearRegression(scene),
  LOGISTIC:         new LogisticRegression(scene),
  REGULARIZATION:   new RegularizationScene(scene),
  DECISION_TREE:    new DecisionTree(scene),
  RANDOM_FOREST:    new RandomForest(scene),
  XGBOOST:          new XGBoostScene(scene),
  SVM:              new SupportVectorMachine(scene),
  KNN:              new KNearestNeighbors(scene),
  NAIVE_BAYES:      new NaiveBayesScene(scene),
  NEURAL_NET:       new NeuralNetworkScene(scene),
  KMEANS:           new KMeansClustering(scene),
  PCA:              new PCAVisual(scene),
  EVALUATION:       new Evaluation(scene),
  ENDING:           new Ending(scene),
}

Object.values(scenes).forEach(s => s.hide())

// ─── WINDOW RESIZE ──────────────────────────────────────────────────────────

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// ─── SCENE SELECTOR DROPDOWN ────────────────────────────────────────────────

const selectScene = document.getElementById("select-scene")
CONFIG.scenes.forEach((s) => {
  const option = document.createElement("option")
  option.value = s.name
  option.textContent = s.description
  selectScene.appendChild(option)
})

// ─── UI DOM REFS ────────────────────────────────────────────────────────────

const btnPlayPause = document.getElementById("btn-play-pause")
const playIcon     = document.getElementById("play-icon")
const pauseIcon    = document.getElementById("pause-icon")
const checkOrbit   = document.getElementById("check-orbit")
const checkNetwork = document.getElementById("check-network")
const subtitleText = document.getElementById("subtitle-text")
const progressBar  = document.getElementById("scene-progress")
const btnRecord    = document.getElementById("btn-record")
const recordText   = document.getElementById("record-text")
const btnAutoRecord   = document.getElementById("btn-auto-record")
const autoRecordText  = document.getElementById("auto-record-text")

// ─── NARRATOR CALLBACKS ─────────────────────────────────────────────────────

/**
 * Called by NarratorEngine each time a new subtitle line starts speaking.
 * Shows the text immediately — speech and subtitle are always in sync.
 */
narrator.onSubtitleChange = (text, idx, total) => {
  if (subtitleText) {
    subtitleText.innerHTML = text
    subtitleText.style.opacity = "1"
  }
}

/**
 * Called by NarratorEngine when all subtitles in the scene are done.
 * This is the ONLY place scene advancement happens during autoplay.
 */
narrator.onSceneComplete = () => {
  if (!sceneManager.isPlaying) return

  const isLast = sceneManager.currentScene === CONFIG.scenes.length - 1

  if (isLast) {
    // End of the whole presentation — wait 1s then stop auto-recording if active
    if (isAutoRecording) {
      setTimeout(() => {
        stopRecording(true).then(() => {
          showToast("Auto-Recording complete! Video downloaded.", "success")
        })
      }, 1000)
    }
    return
  }

  // Brief pause for visual scene transition, then start narrating next scene
  setTimeout(() => {
    sceneManager.nextScene()
    updateSceneUI()
    triggerTransitionBeep()
    // Another brief pause so the 3D transition animation is visible before narration starts
    setTimeout(() => startNarratingCurrentScene(), 600)
  }, 200)
}

/**
 * Called by NarratorEngine with progress % (0–100) based on subtitle index.
 * This drives the progress bar.
 */
narrator.onProgressUpdate = (pct) => {
  sceneManager.setProgress(pct)
}

// ─── START NARRATING A SCENE ────────────────────────────────────────────────

/**
 * Extracts subtitle texts for the current scene and hands them to the narrator.
 * Narrator will: show text → speak it → show next → speak next → fire onSceneComplete.
 */
function startNarratingCurrentScene() {
  const sceneConfig = CONFIG.scenes[sceneManager.currentScene]
  if (!sceneConfig || !sceneManager.isPlaying) return

  const texts = sceneConfig.subtitles
    ? sceneConfig.subtitles.map(s => s.text)
    : []

  // Max duration = subtitle count × ~8s each, minimum 15s
  const estimatedMaxMs = Math.max(15000, texts.length * 8000)

  narrator.startScene(texts, estimatedMaxMs)
}

// ─── WEB AUDIO ENGINE ───────────────────────────────────────────────────────

let audioCtx = null
let recorderAudioDestination = null
let activeOscillators = []
let padGainNode = null
let chordIndex = 0
let userHasInteracted = false

function initAudio() {
  if (userHasInteracted) {
    // Already initialized — just make sure context isn't suspended
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume()
    }
    return
  }

  userHasInteracted = true
  narrator.enable() // Unlock SpeechSynthesis on user gesture

  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  audioCtx = new AudioContextClass()

  // This MediaStream destination captures all Web Audio output for recording
  recorderAudioDestination = audioCtx.createMediaStreamDestination()

  padGainNode = audioCtx.createGain()
  padGainNode.gain.setValueAtTime(0.06, audioCtx.currentTime)
  padGainNode.connect(audioCtx.destination)
  padGainNode.connect(recorderAudioDestination)

  playNextChord()

  // Begin narrating the current (first) scene after voices load
  setTimeout(() => startNarratingCurrentScene(), 300)
}

function playNextChord() {
  if (!audioCtx || audioCtx.state === "closed") return

  const fadeOutTime = 2.0
  const now = audioCtx.currentTime

  activeOscillators.forEach(osc => {
    try {
      osc.gainNode.gain.setValueAtTime(osc.gainNode.gain.value, now)
      osc.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + fadeOutTime)
      setTimeout(() => { osc.stop(); osc.disconnect() }, fadeOutTime * 1000 + 100)
    } catch(e) {}
  })
  activeOscillators = []

  const progression = [
    [55, 110, 164.81, 196.00],
    [65.41, 130.81, 174.61, 261.63],
    [65.41, 130.81, 196.00, 246.94],
    [73.42, 146.83, 174.61, 293.66]
  ]

  const freqs = progression[chordIndex]
  chordIndex = (chordIndex + 1) % progression.length

  freqs.forEach(freq => {
    const osc = audioCtx.createOscillator()
    const filter = audioCtx.createBiquadFilter()
    const oscGain = audioCtx.createGain()

    osc.type = "sawtooth"
    osc.frequency.setValueAtTime(freq, now)
    filter.type = "lowpass"
    filter.frequency.setValueAtTime(320, now)
    filter.Q.setValueAtTime(1.0, now)
    oscGain.gain.setValueAtTime(0.0001, now)
    oscGain.gain.exponentialRampToValueAtTime(0.18, now + 1.5)

    osc.connect(filter)
    filter.connect(oscGain)
    oscGain.connect(padGainNode)
    osc.start(now)

    activeOscillators.push({
      stop: () => { try { osc.stop() } catch(e) {} },
      disconnect: () => { try { osc.disconnect(); filter.disconnect(); oscGain.disconnect() } catch(e) {} },
      gainNode: oscGain
    })
  })

  setTimeout(playNextChord, 6000)
}

function triggerTransitionBeep() {
  if (!audioCtx) return
  const now = audioCtx.currentTime
  const osc = audioCtx.createOscillator()
  const filter = audioCtx.createBiquadFilter()
  const gainNode = audioCtx.createGain()
  osc.type = "sine"
  osc.frequency.setValueAtTime(880, now)
  osc.frequency.exponentialRampToValueAtTime(440, now + 0.15)
  filter.type = "lowpass"
  filter.frequency.setValueAtTime(1200, now)
  gainNode.gain.setValueAtTime(0.0001, now)
  gainNode.gain.linearRampToValueAtTime(0.05, now + 0.02)
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.20)
  osc.connect(filter)
  filter.connect(gainNode)
  gainNode.connect(audioCtx.destination)
  if (recorderAudioDestination) gainNode.connect(recorderAudioDestination)
  osc.start(now)
  osc.stop(now + 0.25)
}

// ─── PLAYBACK CONTROLS ──────────────────────────────────────────────────────

btnPlayPause.addEventListener("click", () => {
  initAudio()
  const isPlaying = sceneManager.togglePlayPause()

  if (isPlaying) {
    playIcon.style.display = "none"
    pauseIcon.style.display = "block"
    narrator.resume()
    // If narrator stopped (was at end), restart the scene's narration
    if (narrator._stopped) {
      startNarratingCurrentScene()
    }
    showToast("Playback resumed")
  } else {
    playIcon.style.display = "block"
    pauseIcon.style.display = "none"
    narrator.pause()
    showToast("Playback paused")
  }
})

document.getElementById("btn-prev").addEventListener("click", () => {
  narrator.stop()
  sceneManager.prevScene()
  updateSceneUI()
  showToast("Previous scene")
  if (sceneManager.isPlaying && userHasInteracted) {
    startNarratingCurrentScene()
  }
})

document.getElementById("btn-next").addEventListener("click", () => {
  narrator.stop()
  sceneManager.nextScene()
  updateSceneUI()
  showToast("Next scene")
  if (sceneManager.isPlaying && userHasInteracted) {
    startNarratingCurrentScene()
  }
})

selectScene.addEventListener("change", (e) => {
  narrator.stop()
  sceneManager.setSceneByName(e.target.value)
  updateSceneUI()
  if (sceneManager.isPlaying && userHasInteracted) {
    startNarratingCurrentScene()
  }
})

// ─── CHECKBOX / SLIDER CONTROLS ─────────────────────────────────────────────

checkNetwork.addEventListener("change", (e) => {
  const isChecked = e.target.checked
  network.nodes.forEach(n => n.visible = isChecked)
  network.lines.forEach(l => l.visible = isChecked)
  showToast(isChecked ? "Neural network background active" : "Neural network background disabled")
})

const sliderParticleSpeed = document.getElementById("slider-particle-speed")
const valParticleSpeed = document.getElementById("val-particle-speed")
sliderParticleSpeed.addEventListener("input", (e) => {
  const spd = parseFloat(e.target.value)
  valParticleSpeed.textContent = spd.toFixed(1) + "x"
  particles.speedMultiplier = spd
})

const sliderCameraSpeed = document.getElementById("slider-camera-speed")
const valCameraSpeed = document.getElementById("val-camera-speed")
sliderCameraSpeed.addEventListener("input", (e) => {
  const spd = parseFloat(e.target.value)
  valCameraSpeed.textContent = spd.toFixed(1) + "x"
  cameraAnimation.speedMultiplier = spd
})

// ─── RECORDING ──────────────────────────────────────────────────────────────

let isAutoRecording = false

let micStream = null
let micSourceNode = null

async function requestMicrophoneForTTS() {
  if (micStream) return
  try {
    // Disable processing to capture the raw speaker output better
    micStream = await navigator.mediaDevices.getUserMedia({ 
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }, 
      video: false 
    })
    
    if (audioCtx && recorderAudioDestination) {
      micSourceNode = audioCtx.createMediaStreamSource(micStream)
      micSourceNode.connect(recorderAudioDestination)
      // We ONLY connect it to the recorder, NOT the speakers, to prevent a shrieking feedback loop!
      showToast("Microphone connected to capture AI voice!", "success")
    }
  } catch (err) {
    console.warn("Mic access denied or failed:", err)
    showToast("Mic access denied. The AI voice will not be in the video.", "warning")
  }
}

btnRecord.addEventListener("click", async () => {
  // initAudio() must be called on user gesture to unlock AudioContext
  initAudio()

  if (recorder.isRecording()) {
    await stopRecording(false) // false = manual stop, keep narrator running
  } else {
    btnRecord.classList.add("recording")
    recordText.textContent = "STOP RECORDING"
    
    // Request Mic before starting so we capture the TTS
    await requestMicrophoneForTTS()
    
    showToast("Recording started... Click again to stop & download.", "info")
    try {
      // Small delay so AudioContext is fully ready on first click
      await new Promise(r => setTimeout(r, 100))
      recorder.start(recorderAudioDestination ? recorderAudioDestination.stream : null)
    } catch (err) {
      console.error("Recording failed to start:", err)
      showToast("Recording failed: " + err.message, "error")
      btnRecord.classList.remove("recording")
      recordText.textContent = "RECORD MANUAL VIDEO"
    }
  }
})

btnAutoRecord.addEventListener("click", async () => {
  initAudio()
  if (isAutoRecording || recorder.isRecording()) {
    await stopRecording(true) // true = was auto, stop narrator too
  } else {
    await startAutoRecording()
  }
})

async function startAutoRecording() {
  initAudio()
  isAutoRecording = true

  // Reset to first scene
  narrator.stop()
  sceneManager.setSceneByName("INTRO")
  sceneManager.isPlaying = true
  updateSceneUI()

  playIcon.style.display = "none"
  pauseIcon.style.display = "block"
  btnAutoRecord.classList.add("recording")
  autoRecordText.textContent = "STOP AUTO RECORDING"
  
  // Request Mic before starting so we capture the TTS
  await requestMicrophoneForTTS()
  
  showToast("Auto-Recording started. Will download when all scenes finish!", "info")

  // Wait for AudioContext to fully set up, then start recording + narration
  setTimeout(() => {
    try {
      recorder.start(recorderAudioDestination ? recorderAudioDestination.stream : null)
    } catch (err) {
      console.error("Auto-recording failed to start:", err)
      showToast("Auto-recording failed: " + err.message, "error")
      isAutoRecording = false
      btnAutoRecord.classList.remove("recording")
      autoRecordText.textContent = "START AUTOMATIC VIDEO"
      return
    }
    startNarratingCurrentScene()
  }, 400)
}

/**
 * @param {boolean} wasAuto - If true, also stop the narrator (auto-record run ended).
 *                            If false, only stop recording; narration continues.
 */
async function stopRecording(wasAuto = false) {
  isAutoRecording = false

  // Only kill narration if this was an auto-recording run
  if (wasAuto) {
    narrator.stop()
  }

  btnRecord.classList.remove("recording")
  recordText.textContent = "RECORD MANUAL VIDEO"
  btnAutoRecord.classList.remove("recording")
  autoRecordText.textContent = "START AUTOMATIC VIDEO"

  showToast("Recording stopped. Preparing download...", "success")
  try {
    await recorder.stop()
  } catch (err) {
    console.error("Error stopping recording:", err)
    showToast("Error saving recording: " + err.message, "error")
  }
}

// ─── TOAST NOTIFICATIONS ────────────────────────────────────────────────────

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container")
  const toast = document.createElement("div")
  toast.className = `toast toast-${type}`
  toast.textContent = message
  container.appendChild(toast)
  setTimeout(() => {
    toast.style.transition = "opacity 0.5s ease"
    toast.style.opacity = "0"
    setTimeout(() => {
      if (toast.parentNode === container) container.removeChild(toast)
    }, 500)
  }, 3500)
}

// ─── SCENE UI UPDATE ────────────────────────────────────────────────────────

let lastSceneName = ""
let renderedSceneName = ""

function updateSceneUI() {
  const currentSceneName = sceneManager.getCurrentScene()
  const sceneIdx = sceneManager.currentScene

  if (selectScene.value !== currentSceneName) {
    selectScene.value = currentSceneName
  }

  const title   = document.getElementById("scene-title")
  const desc    = document.getElementById("scene-desc")
  const counter = document.getElementById("scene-counter")

  if (title)   title.textContent = CONFIG.scenes[sceneIdx].description
  if (desc)    desc.textContent  = sceneManager.getSceneExplanation()
  if (counter) counter.textContent = `${String(sceneIdx + 1).padStart(2, "0")} / ${String(CONFIG.scenes.length).padStart(2, "0")}`
}

// ─── MAIN ANIMATION LOOP ────────────────────────────────────────────────────

function animate() {
  requestAnimationFrame(animate)

  sceneManager.update()

  const currentSceneName = sceneManager.getCurrentScene()

  // Detect scene change — trigger transition and update UI
  if (currentSceneName !== lastSceneName) {
    const oldSceneName = lastSceneName
    lastSceneName = currentSceneName
    updateSceneUI()
    triggerTransitionBeep()

    if (oldSceneName) {
      transitions.trigger(() => {
        renderedSceneName = currentSceneName
      })
    } else {
      renderedSceneName = currentSceneName
    }
  }

  // Progress bar — driven by narrator (subtitle index / total)
  if (progressBar) {
    progressBar.style.width = `${sceneManager.getProgress()}%`
  }

  // Orbit or manual camera
  if (checkOrbit.checked) {
    controls.enabled = false
    cameraAnimation.update()
  } else {
    controls.enabled = true
    controls.update()
  }

  // Background elements
  particles.update()
  if (checkNetwork.checked) {
    network.update()
  }

  // Show/hide and update the active 3D scene
  Object.keys(scenes).forEach((name) => {
    const s = scenes[name]
    if (name === renderedSceneName) {
      if (!s.visible) s.show()
      if (typeof s.update === "function") s.update()
    } else {
      if (s.visible) s.hide()
    }
  })

  renderer.render(scene, camera)
}

animate()

// ─── LOADING SCREEN ─────────────────────────────────────────────────────────

const loadingScreen  = document.getElementById("loading")
const loadingSpinner = document.getElementById("loading-spinner")
const loadingStatus  = document.getElementById("loading-status")
const btnStart       = document.getElementById("btn-start")

if (loadingScreen) {
  // Show START button after engine loads (~800ms)
  setTimeout(() => {
    if (loadingSpinner) loadingSpinner.style.display = "none"
    if (loadingStatus)  loadingStatus.textContent = "READY TO START"
    if (btnStart) {
      btnStart.style.display = "block"
      btnStart.focus()
    } else {
      loadingScreen.classList.add("hidden")
      setTimeout(() => { loadingScreen.style.display = "none" }, 600)
      showToast("Explainer Engine Online", "success")
    }
  }, 800)

  if (btnStart) {
    btnStart.addEventListener("click", () => {
      // initAudio() unlocks AudioContext + SpeechSynthesis + starts narration
      initAudio()

      loadingScreen.classList.add("hidden")
      setTimeout(() => { loadingScreen.style.display = "none" }, 600)
      showToast("Explainer Engine Online — narration starting!", "success")

      // Auto-record if requested
      const hasAutoParam = window.location.search.includes("autorecord") || window.location.search.includes("auto")
      if (CONFIG.autoRecordOnLoad || hasAutoParam) {
        setTimeout(() => startAutoRecording(), 600)
      }
    })
  }
}