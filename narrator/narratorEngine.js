/**
 * NarratorEngine — Speech-driven subtitle and scene sequencer.
 *
 * HOW IT WORKS:
 *   1. Call narrator.startScene(sceneIndex) to begin a scene's narration.
 *   2. The engine speaks each subtitle in order using SpeechSynthesis.
 *   3. When each subtitle FINISHES speaking, the next one starts immediately.
 *   4. When all subtitles in a scene are done, onSceneComplete() fires.
 *   5. Everything is driven by speech — NO timers controlling when text appears.
 *
 * VOICE PREFERENCE is cached in localStorage so it persists across sessions.
 */
export default class NarratorEngine {
  constructor() {
    this._voices = []
    this._queue = []           // Array of subtitle texts for current scene
    this._currentIdx = -1      // Which subtitle is currently speaking
    this._utterance = null     // Active SpeechSynthesisUtterance
    this._safetyTimer = null   // Fallback timer per utterance
    this._sceneAdvanceTimer = null // Fallback timer for whole scene
    this._enabled = false      // Only speaks after user gesture
    this._paused = false       // Is narration paused?
    this._stopped = true       // Fully stopped (scene not started)

    // Callbacks — set these from outside
    this.onSubtitleChange = null   // (text, idx, total) => void
    this.onSceneComplete = null    // () => void
    this.onProgressUpdate = null   // (pct 0-100) => void

    // LocalStorage keys
    this.VOICE_KEY = 'kg_narrator_voice'
    this.RATE_KEY = 'kg_narrator_rate'

    // Settings
    this.speechRate = parseFloat(localStorage.getItem(this.RATE_KEY) || '0.92')
    this.speechPitch = 1.0

    // Initialize voice list (async in most browsers)
    this._initVoices()
  }

  // ─── PUBLIC API ─────────────────────────────────────────────────────────────

  /**
   * Call this on first user gesture. Unlocks SpeechSynthesis in the browser.
   */
  enable() {
    this._enabled = true
    // Warm up SpeechSynthesis with a silent utterance
    if (window.speechSynthesis) {
      try {
        const warm = new SpeechSynthesisUtterance('')
        warm.volume = 0
        window.speechSynthesis.speak(warm)
      } catch (e) { /* ignore */ }
    }
    this._initVoices()
  }

  /**
   * Start narrating a scene. Stops any current narration immediately.
   * @param {string[]} texts - Array of subtitle strings to speak in order
   * @param {number} maxDurationMs - Max time before forcing scene complete (fallback)
   */
  startScene(texts, maxDurationMs = 30000) {
    this._stop()
    this._queue = texts.filter(t => t && t.trim())
    this._currentIdx = -1
    this._stopped = false
    this._paused = false

    if (this._queue.length === 0) {
      // Nothing to say — complete immediately
      setTimeout(() => this._fireSceneComplete(), 500)
      return
    }

    // Scene-level safety fallback
    clearTimeout(this._sceneAdvanceTimer)
    this._sceneAdvanceTimer = setTimeout(() => {
      console.warn('[Narrator] Scene max-duration fallback triggered')
      this._stop()
      this._fireSceneComplete()
    }, maxDurationMs)

    this._next()
  }

  /**
   * Pause current narration.
   */
  pause() {
    if (this._paused || this._stopped) return
    this._paused = true
    if (window.speechSynthesis) {
      window.speechSynthesis.pause()
    }
  }

  /**
   * Resume paused narration.
   */
  resume() {
    if (!this._paused) return
    this._paused = false
    if (window.speechSynthesis) {
      window.speechSynthesis.resume()
    }
  }

  /**
   * Stop all narration for current scene (does not fire onSceneComplete).
   */
  stop() {
    this._stop()
  }

  /**
   * Immediately skip to the next subtitle.
   */
  skipSubtitle() {
    this._cancelCurrentUtterance()
    this._advance()
  }

  /**
   * Restart the current scene's narration from the first subtitle.
   */
  restartScene(maxDurationMs = 30000) {
    const queue = [...this._queue]
    this.startScene(queue, maxDurationMs)
  }

  /**
   * Get current narration progress (0–100) based on subtitle index.
   */
  getProgress() {
    if (this._queue.length === 0) return 100
    if (this._currentIdx < 0) return 0
    return Math.min(100, Math.round((this._currentIdx / this._queue.length) * 100))
  }

  /**
   * Get/set speech rate and persist to localStorage.
   */
  setSpeechRate(rate) {
    this.speechRate = Math.max(0.5, Math.min(1.5, rate))
    localStorage.setItem(this.RATE_KEY, this.speechRate.toString())
  }

  /**
   * Set preferred voice by name and persist to localStorage.
   */
  setVoice(voiceName) {
    localStorage.setItem(this.VOICE_KEY, voiceName)
  }

  /**
   * Returns all available English voices.
   */
  getAvailableVoices() {
    return this._voices.filter(v => v.lang.startsWith('en'))
  }

  // ─── PRIVATE ────────────────────────────────────────────────────────────────

  _initVoices() {
    if (!window.speechSynthesis) return

    const load = () => {
      this._voices = window.speechSynthesis.getVoices()
    }

    load()
    window.speechSynthesis.onvoiceschanged = () => {
      load()
    }
  }

  _getBestVoice() {
    if (this._voices.length === 0) return null

    // Try cached preference first
    const cached = localStorage.getItem(this.VOICE_KEY)
    if (cached) {
      const found = this._voices.find(v => v.name === cached)
      if (found) return found
    }

    // Priority order for natural-sounding voices
    const voice =
      this._voices.find(v => v.lang.startsWith('en') && v.name.includes('Google') && v.name.includes('US')) ||
      this._voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural'))) ||
      this._voices.find(v => v.lang === 'en-US' && (v.name.includes('Samantha') || v.name.includes('Alex'))) ||
      this._voices.find(v => v.lang.startsWith('en') && (v.name.includes('Siri') || v.name.includes('Daniel'))) ||
      this._voices.find(v => v.lang.startsWith('en') && v.name.includes('Microsoft') && !v.name.includes('Hazel')) ||
      this._voices.find(v => v.lang === 'en-US') ||
      this._voices.find(v => v.lang.startsWith('en'))

    if (voice) {
      localStorage.setItem(this.VOICE_KEY, voice.name)
    }

    return voice || null
  }

  _next() {
    if (this._stopped || this._paused) return

    this._currentIdx++

    if (this._currentIdx >= this._queue.length) {
      // All subtitles done
      clearTimeout(this._sceneAdvanceTimer)
      this._stopped = true
      setTimeout(() => this._fireSceneComplete(), 400)
      return
    }

    const text = this._queue[this._currentIdx]

    // Notify UI — show subtitle text immediately
    if (this.onSubtitleChange) {
      this.onSubtitleChange(text, this._currentIdx, this._queue.length)
    }
    if (this.onProgressUpdate) {
      this.onProgressUpdate(this.getProgress())
    }

    // Now speak it
    this._speak(text)
  }

  _speak(text) {
    if (!this._enabled) {
      // Not unlocked yet — estimate time and advance
      const estimatedMs = Math.max(2000, text.length * 70)
      setTimeout(() => this._advance(), estimatedMs)
      return
    }

    if (!window.speechSynthesis) {
      // No TTS support — use timing fallback
      const estimatedMs = Math.max(2500, text.length * 70)
      setTimeout(() => this._advance(), estimatedMs)
      return
    }

    // Cancel any stuck synthesis (Chrome bug: synthesis gets stuck after tab switch)
    // Re-cancel and re-queue if needed
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
    }

    // Strip HTML tags for speech synthesis so it doesn't read them out loud
    const cleanText = text.replace(/<[^>]*>?/gm, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.rate = this.speechRate
    utterance.pitch = this.speechPitch
    utterance.volume = 1.0

    const voice = this._getBestVoice()
    if (voice) utterance.voice = voice

    this._utterance = utterance

    let finished = false

    const onFinish = () => {
      if (finished) return
      finished = true
      clearTimeout(this._safetyTimer)
      this._utterance = null
      // Natural 300ms pause between subtitles (feels human)
      setTimeout(() => this._advance(), 300)
    }

    utterance.onend = () => {
      onFinish()
    }

    utterance.onerror = (e) => {
      // 'canceled' and 'interrupted' mean we stopped it deliberately — ignore
      if (e.error === 'canceled' || e.error === 'interrupted') {
        return
      }
      console.warn('[Narrator] TTS error:', e.error, '| Text:', text.substring(0, 40))
      onFinish()
    }

    // Per-utterance safety timeout: ~70ms per char + 1.5s base
    const safeMs = Math.max(3500, text.length * 70 + 1500)
    this._safetyTimer = setTimeout(() => {
      if (!finished) {
        console.warn('[Narrator] Safety timeout for:', text.substring(0, 40))
        onFinish()
      }
    }, safeMs)

    // Chrome fix: if speechSynthesis is paused, resume before speaking
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
    }

    window.speechSynthesis.speak(utterance)
  }

  _advance() {
    if (this._stopped || this._paused) return
    this._next()
  }

  _cancelCurrentUtterance() {
    clearTimeout(this._safetyTimer)
    this._utterance = null
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  }

  _stop() {
    this._stopped = true
    this._paused = false
    this._currentIdx = -1
    clearTimeout(this._safetyTimer)
    clearTimeout(this._sceneAdvanceTimer)
    this._cancelCurrentUtterance()
    this._queue = []
  }

  _fireSceneComplete() {
    if (this.onSceneComplete) {
      this.onSceneComplete()
    }
  }
}
