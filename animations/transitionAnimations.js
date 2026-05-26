import { gsap } from "gsap"

export default class TransitionAnimations {
  constructor() {
    this.overlay = null
    this.createOverlay()
  }

  createOverlay() {
    this.overlay = document.createElement("div")
    this.overlay.className = "scene-transition-overlay"
    this.overlay.style.position = "fixed"
    this.overlay.style.top = "0"
    this.overlay.style.left = "0"
    this.overlay.style.width = "100%"
    this.overlay.style.height = "100%"
    this.overlay.style.backgroundColor = "#030511"
    this.overlay.style.zIndex = "999"
    this.overlay.style.opacity = "0"
    this.overlay.style.pointerEvents = "none"
    this.overlay.style.display = "flex"
    this.overlay.style.justifyContent = "center"
    this.overlay.style.alignItems = "center"

    const glowBar = document.createElement("div")
    glowBar.style.width = "100%"
    glowBar.style.height = "4px"
    glowBar.style.background = "linear-gradient(90deg, transparent, #4cc9ff, #00ff88, #4cc9ff, transparent)"
    glowBar.style.boxShadow = "0 0 20px #4cc9ff, 0 0 10px #00ff88"
    glowBar.style.position = "absolute"
    this.glowBar = glowBar
    this.overlay.appendChild(glowBar)

    document.body.appendChild(this.overlay)
  }

  trigger(onMidpointCallback, duration = 0.8) {
    if (!this.overlay) return

    gsap.killTweensOf(this.overlay)
    gsap.killTweensOf(this.glowBar)

    this.glowBar.style.top = "0%"

    const tl = gsap.timeline()
    
    tl.to(this.overlay, {
      opacity: 1,
      duration: duration * 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        if (onMidpointCallback) onMidpointCallback()
      }
    })
    .to(this.glowBar, {
      top: "100%",
      duration: duration * 0.6,
      ease: "power1.inOut"
    }, "-=0.2")
    .to(this.overlay, {
      opacity: 0,
      duration: duration * 0.4,
      ease: "power2.inOut"
    }, "-=0.2")
  }
}
