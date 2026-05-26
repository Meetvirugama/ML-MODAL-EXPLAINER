import { CONFIG } from "../config"

export default class SceneManager {
  constructor() {
    this.currentScene = 0
    this.scenes = CONFIG.scenes.map(s => s.name)
    this.isPlaying = true
    this.lastSwitch = Date.now()
    this.pausedElapsed = 0

    /**
     * When true, the narrator engine controls scene switching.
     * The timer-based auto-advance is disabled.
     * Progress is set externally via setProgress().
     */
    this.narratorMode = true
    this._narratorProgress = 0  // 0–100, set by narrator

    // Callbacks
    this.onTimelineComplete = null
  }

  update() {
    if (!this.isPlaying) {
      this.lastSwitch = Date.now() - this.pausedElapsed
      return
    }

    if (this.narratorMode) {
      // Don't auto-advance — narrator drives scene switching.
      // Just keep lastSwitch in sync so animations have a valid reference.
      return
    }

    // Legacy timer-based mode (fallback if narratorMode is off)
    const currentTime = Date.now()
    const timeSinceSwitch = currentTime - this.lastSwitch
    const currentDuration = CONFIG.scenes[this.currentScene].duration || CONFIG.sceneSwitchDuration

    if (timeSinceSwitch > currentDuration) {
      if (this.currentScene === this.scenes.length - 1) {
        if (this.onTimelineComplete) this.onTimelineComplete()
      }
      this.nextScene()
    }
  }

  getCurrentScene() {
    return this.scenes[this.currentScene]
  }

  /**
   * In narrator mode, progress is 0–100 based on subtitle index.
   * In timer mode, progress is time-based.
   */
  getProgress() {
    if (this.narratorMode) {
      return this._narratorProgress
    }
    const currentTime = Date.now()
    const timeSinceSwitch = currentTime - this.lastSwitch
    const currentDuration = CONFIG.scenes[this.currentScene].duration || CONFIG.sceneSwitchDuration
    return Math.min(100, Math.max(0, (timeSinceSwitch / currentDuration) * 100))
  }

  /** Called by narrator to update progress bar. */
  setProgress(pct) {
    this._narratorProgress = Math.min(100, Math.max(0, pct))
  }

  getSceneDescription() {
    return CONFIG.scenes[this.currentScene].description
  }

  getSceneExplanation() {
    return CONFIG.scenes[this.currentScene].explanation || ""
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying
    if (this.isPlaying) {
      this.lastSwitch = Date.now() - this.pausedElapsed
    } else {
      this.pausedElapsed = Date.now() - this.lastSwitch
    }
    return this.isPlaying
  }

  nextScene() {
    const wasLast = this.currentScene === this.scenes.length - 1
    this.currentScene = (this.currentScene + 1) % this.scenes.length
    this.resetTimer()
    if (wasLast && this.onTimelineComplete) {
      this.onTimelineComplete()
    }
  }

  prevScene() {
    this.currentScene = (this.currentScene - 1 + this.scenes.length) % this.scenes.length
    this.resetTimer()
  }

  setSceneByName(name) {
    const index = this.scenes.indexOf(name)
    if (index !== -1) {
      this.currentScene = index
      this.resetTimer()
    }
  }

  resetTimer() {
    this.lastSwitch = Date.now()
    this.pausedElapsed = 0
    this._narratorProgress = 0
  }
}