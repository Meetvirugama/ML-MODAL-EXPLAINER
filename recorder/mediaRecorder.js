export default class VideoRecorder {
  constructor(canvas) {
    this.canvas = canvas
    this.recordedChunks = []
    this.mediaRecorder = null
    this.mimeType = "video/webm"
  }

  start(audioStream = null) {
    // Stop any existing recording first
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      console.warn("VideoRecorder: already recording, stopping previous recording first")
      this.mediaRecorder.stop()
      this.mediaRecorder = null
    }
    
    this.recordedChunks = []
    
    // Capture canvas stream
    let stream
    if (this.canvas.captureStream) {
      stream = this.canvas.captureStream(60)
    } else if (this.canvas.mozCaptureStream) {
      stream = this.canvas.mozCaptureStream(60)
    } else {
      throw new Error("Canvas captureStream is not supported in this browser. Try Chrome or Firefox.")
    }

    // Merge audio tracks if provided
    if (audioStream) {
      try {
        const videoTracks = stream.getVideoTracks()
        const audioTracks = audioStream.getAudioTracks()
        if (audioTracks.length > 0) {
          stream = new MediaStream([...videoTracks, ...audioTracks])
        }
      } catch (e) {
        console.warn("VideoRecorder: failed to merge audio tracks, recording video only:", e)
      }
    }

    // Find best supported MIME type
    const types = [
      "video/webm;codecs=vp9,opus",
      "video/webm;codecs=vp8,opus",
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/webm",
      "video/mp4"
    ]

    let options = {}
    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        options.mimeType = type
        this.mimeType = type
        break
      }
    }

    // Create MediaRecorder with fallback
    try {
      this.mediaRecorder = new MediaRecorder(stream, options)
    } catch (e) {
      console.warn("VideoRecorder: failed with options, trying without:", e)
      try {
        this.mediaRecorder = new MediaRecorder(stream)
        this.mimeType = this.mediaRecorder.mimeType || "video/webm"
      } catch (e2) {
        throw new Error("MediaRecorder is not supported: " + e2.message)
      }
    }

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordedChunks.push(event.data)
      }
    }

    this.mediaRecorder.onerror = (event) => {
      console.error("MediaRecorder error:", event.error)
    }

    // Collect chunks every 250ms for more reliable data
    this.mediaRecorder.start(250)
    console.log("🎬 Recording started | MIME:", this.mimeType, "| Audio:", audioStream ? "YES" : "NO")
  }

  stop() {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === "inactive") {
        console.warn("VideoRecorder: stop() called but no active recording")
        resolve(null)
        return
      }

      // Request final data chunk before stopping
      if (this.mediaRecorder.state === "recording") {
        this.mediaRecorder.requestData()
      }

      this.mediaRecorder.onstop = () => {
        // Guard against empty recordings
        if (this.recordedChunks.length === 0) {
          console.warn("VideoRecorder: no data was recorded")
          resolve(null)
          return
        }

        const blob = new Blob(this.recordedChunks, { type: this.mimeType })
        
        if (blob.size === 0) {
          console.warn("VideoRecorder: blob is empty (0 bytes)")
          resolve(null)
          return
        }

        // Trigger download
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        
        const isMp4 = this.mimeType.includes("mp4")
        const timestamp = new Date().toISOString().slice(0,19).replace(/[T:]/g, "-")
        a.download = isMp4
          ? `kaggle-explainer-${timestamp}.mp4`
          : `kaggle-explainer-${timestamp}.webm`
        
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        // Revoke after download starts
        setTimeout(() => URL.revokeObjectURL(url), 5000)

        console.log(`✅ Recording saved: ${a.download} (${(blob.size / 1024 / 1024).toFixed(2)} MB)`)
        
        // Clean up
        this.recordedChunks = []
        this.mediaRecorder = null
        
        resolve(blob)
      }

      this.mediaRecorder.onerror = (event) => {
        console.error("MediaRecorder error during stop:", event.error)
        reject(event.error)
      }

      this.mediaRecorder.stop()
    })
  }

  isRecording() {
    return !!(this.mediaRecorder && this.mediaRecorder.state === "recording")
  }

  isPaused() {
    return !!(this.mediaRecorder && this.mediaRecorder.state === "paused")
  }

  isActive() {
    return this.isRecording() || this.isPaused()
  }
}