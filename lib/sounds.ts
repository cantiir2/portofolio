export class SoundManager {
  private enabled: boolean = false;
  private audioContext: AudioContext | null = null;
  private sounds: Map<string, AudioBuffer> = new Map();

  constructor() {
    if (typeof window !== "undefined") {
      this.loadPreference();
    }
  }

  private loadPreference() {
    const saved = localStorage.getItem("soundEnabled");
    this.enabled = saved === "true";
  }

  async init() {
    if (typeof window === "undefined" || this.audioContext) return;

    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn("AudioContext not supported");
    }
  }

  enable() {
    this.enabled = true;
    if (typeof window !== "undefined") {
      localStorage.setItem("soundEnabled", "true");
    }
  }

  disable() {
    this.enabled = false;
    if (typeof window !== "undefined") {
      localStorage.setItem("soundEnabled", "false");
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  async playClick() {
    if (!this.enabled || !this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    } catch (e) {
      // Silent fail
    }
  }

  async playHover() {
    if (!this.enabled || !this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = 600;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.05);
    } catch (e) {
      // Silent fail
    }
  }
}

export const soundManager = new SoundManager();

