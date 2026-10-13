/**
 * A Letter for Elis 💌
 * Author: Ryuu / Robby
 * Interactive digital love letter website
 */

// =============================================================================
// 1. DATA SURAT (Mudah diedit jika ingin disesuaikan)
// =============================================================================
const lettersData = [
  {
    tag: "Surat #1",
    stamp: "💌",
    title: "Surat Pertama 💌",
    paragraphs: [
      "Hallo cantik",
      "Aku punya sesuatu nih buat kamu.",
      "Mungkin ini cuma sebuah surat kecil, tapi aku bikinnya khusus buat kamu. Jadi sebelum lanjut, baca pelan-pelan yaa hehe.",
      "Anggap aja ini sebagai little surprise kecil dari aku buat kamu.",
      "Semoga kamu suka yaa."
    ],
    signature: "— dari Ryuu / Robby",
    decorType: "clean"
  },
  {
    tag: "Surat #2",
    stamp: "🎁",
    title: "Something for You 🎁",
    paragraphs: [
      "Untuk something yang pertama...",
      "Coba deh cek akun Roblox kamu. 👀",
      "Aku ada ngirimin sesuatu buat kamu.",
      "jangan ragu buat dipakai yaa habisin aja. nanti kalo kurang aku kirim lagi hehe.",
      "Anggap aja itu hadiah kecil dari aku buat kamu.",
      "Jadi... enjoy it, cantik."
    ],
    signature: "— dari Ryuu / Robby",
    decorType: "gift"
  },
  {
    tag: "Surat #3",
    stamp: "✨",
    title: "Jangan Lupa Semangat",
    paragraphs: [
      "Kamu harus tetap semangat terus yaa.",
      "Aku tahu mungkin kadang kamu sering diuji sama keadaan, banyak hal yang datang silih berganti, dan mungkin nggak semuanya gampang buat dilewatin.",
      "Tapi aku harap kamu tetap jadi Elis yang kuat, sabar, dan nggak gampang menyerah.",
      "Kalau lagi capek, istirahat sebentar nggak apa-apa.",
      "Nggak harus selalu kuat setiap saat.",
      "Aku percaya kamu bisa lewatin semuanya. ✨"
    ],
    signature: "— dari Ryuu / Robby",
    decorType: "clean"
  },
  {
    tag: "Surat #4",
    stamp: "✨",
    title: "One Last Thing...",
    paragraphs: [
      "Dan ini surat terakhirnya...",
      "semangat terus yaa, buat kamu.",
      "Apapun yang nanti terjadi, aku bakal tetap support kamu sebisa aku.",
      "Kalau suatu hari kamu lagi ngerasa semuanya berat, semoga kamu selalu inget kalau kamu nggak sendirian.",
      "Aku mungkin nggak selalu bisa ada di setiap keadaan, tapi aku bakal selalu berharap kamu baik-baik aja dan bisa terus melangkah.",
      "Oh iya...",
      "Aku juga masih inget sama janji aku tentang something yang kedua. 👀",
      "Tapi untuk yang itu...",
      "Coming soon yaa, hehehe. 🤭",
      "Jadi di tunggu ya surprise berikutnya."
    ],
    signature: "— Ryuu / Robby",
    decorType: "sparkle",
    isLargeSignature: true
  }
];

// =============================================================================
// 2. STATE MANAGEMENT & DOM ELEMENTS
// =============================================================================
let currentScreen = "welcome-screen";
let currentLetterIndex = 0;
let isAnimatingTransition = false;
let isEnvelopeOpened = false;

// DOM Elements
const screens = {
  welcome: document.getElementById("welcome-screen"),
  envelope: document.getElementById("envelope-screen"),
  letter: document.getElementById("letter-screen"),
  final: document.getElementById("final-screen")
};

const startBtn = document.getElementById("start-btn");
const envelopeWrapper = document.getElementById("envelope-wrapper");
const envelopeEl = document.querySelector(".envelope");

const letterCounter = document.getElementById("letter-counter");
const progressDotsContainer = document.getElementById("progress-dots");
const dots = document.querySelectorAll(".progress-dots .dot");
const cardViewport = document.getElementById("card-viewport");
const letterCard = document.getElementById("active-letter-card");
const cardStamp = document.getElementById("card-stamp");
const letterTag = document.getElementById("letter-tag");
const letterTitle = document.getElementById("letter-title");
const letterBody = document.getElementById("letter-body");
const letterSignature = document.getElementById("letter-signature");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const readAgainBtn = document.getElementById("read-again-btn");
const shareLoveBtn = document.getElementById("share-love-btn");

const musicToggleBtn = document.getElementById("music-toggle-btn");
const bgmAudio = document.getElementById("bgm-audio");
const tapEffectsContainer = document.getElementById("tap-effects-container");

// =============================================================================
// 3. SCREEN SWITCHER
// =============================================================================
function switchScreen(targetScreenId) {
  if (isAnimatingTransition) return;
  isAnimatingTransition = true;

  const currentEl = document.getElementById(currentScreen);
  const targetEl = document.getElementById(targetScreenId);

  if (currentEl) {
    currentEl.classList.add("exiting");
    setTimeout(() => {
      currentEl.classList.remove("active", "exiting");
      targetEl.classList.add("active");
      currentScreen = targetScreenId;
      isAnimatingTransition = false;
    }, 320);
  } else {
    targetEl.classList.add("active");
    currentScreen = targetScreenId;
    isAnimatingTransition = false;
  }
}

// =============================================================================
// 4. LETTER RENDERING & ANIMATIONS
// =============================================================================
function renderLetterContent(index) {
  const data = lettersData[index];
  if (!data) return;

  letterTag.textContent = data.tag;
  cardStamp.textContent = data.stamp;
  letterTitle.textContent = data.title;

  // Render paragraphs with cute styling
  letterBody.innerHTML = "";
  data.paragraphs.forEach((pText) => {
    const p = document.createElement("p");
    
    // Check for special highlighted phrases
    if (pText.includes("Roblox kamu")) {
      p.innerHTML = pText.replace("Roblox kamu. 👀", `<span class="gift-badge">🎮 Akun Roblox kamu 👀</span>`);
    } else if (pText.includes("Coming soon yaa")) {
      p.innerHTML = pText.replace("Coming soon yaa, hehehe. 🤭", `<span class="letter-highlight-decor">✨ Coming soon yaa, hehehe 🤭</span>`);
    } else {
      p.textContent = pText;
    }
    
    letterBody.appendChild(p);
  });

  // Always reset scroll to top on new letter
  letterBody.scrollTop = 0;

  letterSignature.textContent = data.signature;
  if (data.isLargeSignature) {
    letterSignature.classList.add("large-sign");
  } else {
    letterSignature.classList.remove("large-sign");
  }

  // Update Indicator Counter
  letterCounter.textContent = `${index + 1} / ${lettersData.length}`;

  // Update Dots
  dots.forEach((dot, dotIdx) => {
    if (dotIdx === index) {
      dot.classList.add("active");
      dot.setAttribute("aria-selected", "true");
    } else {
      dot.classList.remove("active");
      dot.setAttribute("aria-selected", "false");
    }
  });

  // Update Navigation Buttons
  if (index === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (index === lettersData.length - 1) {
    nextBtn.classList.add("finish-state");
    nextBtn.innerHTML = `<span class="nav-label">Finish</span><span class="nav-arrow">✨</span>`;
  } else {
    nextBtn.classList.remove("finish-state");
    nextBtn.innerHTML = `<span class="nav-label">Next</span><span class="nav-arrow">→</span>`;
  }
}

function goToLetter(newIndex, direction = "next") {
  if (isAnimatingTransition || newIndex === currentLetterIndex) return;
  if (newIndex < 0 || newIndex >= lettersData.length) return;

  isAnimatingTransition = true;

  const outClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  const inClass = direction === "next" ? "slide-in-right" : "slide-in-left";

  letterCard.classList.remove("slide-out-left", "slide-in-right", "slide-out-right", "slide-in-left");
  letterCard.classList.add(outClass);

  setTimeout(() => {
    currentLetterIndex = newIndex;
    renderLetterContent(currentLetterIndex);

    letterCard.classList.remove(outClass);
    letterCard.classList.add(inClass);

    setTimeout(() => {
      letterCard.classList.remove(inClass);
      isAnimatingTransition = false;
    }, 290);
  }, 240);
}

// Next / Previous Buttons
nextBtn.addEventListener("click", () => {
  if (currentLetterIndex < lettersData.length - 1) {
    goToLetter(currentLetterIndex + 1, "next");
  } else {
    // Reached finish on Surat 4
    launchConfetti();
    switchScreen("final-screen");
  }
});

prevBtn.addEventListener("click", () => {
  if (currentLetterIndex > 0) {
    goToLetter(currentLetterIndex - 1, "prev");
  }
});

// Dot navigation click
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    if (idx === currentLetterIndex) return;
    const direction = idx > currentLetterIndex ? "next" : "prev";
    goToLetter(idx, direction);
  });
});

// =============================================================================
// 5. TOUCH SWIPE GESTURES FOR MOBILE
// =============================================================================
let touchStartX = 0;
let touchStartY = 0;
const SWIPE_THRESHOLD = 50;

cardViewport.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

cardViewport.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  // Check if horizontal swipe is dominant
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > SWIPE_THRESHOLD) {
    if (diffX < 0) {
      // Swiped Left -> Next
      if (currentLetterIndex < lettersData.length - 1) {
        goToLetter(currentLetterIndex + 1, "next");
      } else {
        launchConfetti();
        switchScreen("final-screen");
      }
    } else {
      // Swiped Right -> Previous
      if (currentLetterIndex > 0) {
        goToLetter(currentLetterIndex - 1, "prev");
      }
    }
  }
}, { passive: true });

// =============================================================================
// 6. ENVELOPE OPENING INTERACTION
// =============================================================================
startBtn.addEventListener("click", () => {
  isEnvelopeOpened = false;
  envelopeEl.classList.remove("opened");
  envelopeWrapper.classList.remove("opening");
  switchScreen("envelope-screen");
});

function handleOpenEnvelope() {
  if (isEnvelopeOpened || isAnimatingTransition) return;
  isEnvelopeOpened = true;

  // Jiggle envelope
  envelopeWrapper.classList.add("opening");

  // Spawn celebratory hearts around envelope
  const rect = envelopeWrapper.getBoundingClientRect();
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 160;
      const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 100;
      createTapHeart(x, y);
    }, i * 50);
  }

  // Open flap and pull letter out
  setTimeout(() => {
    envelopeEl.classList.add("opened");
  }, 220);

  // Transition to Letter Viewer
  setTimeout(() => {
    currentLetterIndex = 0;
    renderLetterContent(0);
    switchScreen("letter-screen");
  }, 1100);
}

envelopeWrapper.addEventListener("click", handleOpenEnvelope);
envelopeWrapper.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleOpenEnvelope();
  }
});

// =============================================================================
// 7. FINAL SCREEN ACTIONS
// =============================================================================
readAgainBtn.addEventListener("click", () => {
  currentLetterIndex = 0;
  renderLetterContent(0);
  switchScreen("letter-screen");
});

shareLoveBtn.addEventListener("click", (e) => {
  launchConfetti();
  // Spawn shower of sparkles
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const x = window.innerWidth * (0.2 + Math.random() * 0.6);
      const y = window.innerHeight * (0.3 + Math.random() * 0.4);
      createTapHeart(x, y);
    }, i * 50);
  }
  showToast("Senyum Elis diterima! ✨ Terima kasih sudah baca sampai akhir ✨");
});

// Toast notification helper
function showToast(message) {
  let existing = document.querySelector(".toast-msg");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger reflow
  toast.offsetHeight;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// =============================================================================
// 8. INTERACTIVE TAP / CLICK PARTICLES (Mini Sparkle & Heart Burst)
// =============================================================================
const HEART_SYMBOLS = ["🌸", "💗", "✨", "🌷", "💖"];

function createTapHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "tap-heart";
  heart.textContent = HEART_SYMBOLS[Math.floor(Math.random() * HEART_SYMBOLS.length)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  
  // Random small rotation
  const rot = (Math.random() - 0.5) * 40;
  heart.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
  
  tapEffectsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 900);
}

window.addEventListener("pointerdown", (e) => {
  // Don't spawn on button clicks if they already have actions, but spawn everywhere else
  createTapHeart(e.clientX, e.clientY);
});

// =============================================================================
// 9. BACKGROUND MUSIC (Autoplay by default with Fallback Synthesizer)
// =============================================================================
let isMusicPlaying = true; // Default ON as requested
let audioContext = null;
let musicBoxInterval = null;

// Gentle Music Box Pentatonic Melody (Key of F Major / C Major, Dreamy & Warm)
const melodyNotes = [
  523.25, // C5
  659.25, // E5
  783.99, // G5
  880.00, // A5
  987.77, // B5
  1046.50 // C6
];

const chordPattern = [
  [523.25, 659.25, 783.99],          // C
  [440.00, 523.25, 659.25],          // Am
  [349.23, 440.00, 523.25, 659.25],  // Fmaj7
  [392.00, 493.88, 587.33, 783.99]   // G
];

function playMusicBoxChime(frequency, time, duration = 1.2) {
  if (!audioContext) return;

  try {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    // Soft sine/triangle sound like a celeste or kalimba
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.09, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start(time);
    osc.stop(time + duration);
  } catch (err) {
    // Ignore audio errors
  }
}

let melodyStep = 0;
function startProceduralMusicBox() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  if (musicBoxInterval) clearInterval(musicBoxInterval);

  melodyStep = 0;
  musicBoxInterval = setInterval(() => {
    if (!isMusicPlaying) return;

    const now = audioContext.currentTime;
    const chordIndex = Math.floor(melodyStep / 4) % chordPattern.length;
    const currentChord = chordPattern[chordIndex];
    
    // Play bass/arpeggio note
    const note = currentChord[melodyStep % currentChord.length];
    playMusicBoxChime(note, now, 1.4);

    // Occasionally play a high sparkle note
    if (melodyStep % 2 === 0) {
      const sparkle = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
      playMusicBoxChime(sparkle, now + 0.2, 1.0);
    }

    melodyStep++;
  }, 480);
}

function stopProceduralMusicBox() {
  if (musicBoxInterval) {
    clearInterval(musicBoxInterval);
    musicBoxInterval = null;
  }
}

// Play Music function
async function playMusic() {
  isMusicPlaying = true;
  musicToggleBtn.classList.add("playing");
  const musicLabelState = musicToggleBtn.querySelector(".music-state");
  if (musicLabelState) musicLabelState.textContent = "ON";

  // Try playing <audio id="bgm-audio"> first if available
  let audioPlayed = false;
  if (bgmAudio) {
    try {
      await bgmAudio.play();
      audioPlayed = true;
    } catch (err) {
      audioPlayed = false;
    }
  }

  if (!audioPlayed) {
    startProceduralMusicBox();
  }
}

// Pause/Stop Music function
function pauseMusic() {
  isMusicPlaying = false;
  musicToggleBtn.classList.remove("playing");
  const musicLabelState = musicToggleBtn.querySelector(".music-state");
  if (musicLabelState) musicLabelState.textContent = "OFF";

  if (bgmAudio) {
    bgmAudio.pause();
  }
  stopProceduralMusicBox();
}

// Toggle Music
function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

musicToggleBtn.addEventListener("click", toggleMusic);

// Ensure audio starts immediately or on first user interaction if blocked by browser policy
function initAutoplay() {
  playMusic().catch(() => {});
  
  // Fallback for browsers that block initial autoplay until first interaction
  const unlockAudio = () => {
    if (isMusicPlaying) {
      if (audioContext && audioContext.state === "suspended") {
        audioContext.resume();
      }
      playMusic().catch(() => {});
    }
  };

  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("touchstart", unlockAudio, { once: true });
  window.addEventListener("click", unlockAudio, { once: true });
}

// =============================================================================
// 10. AMBIENT BACKGROUND PARTICLES (Gentle Floating Hearts & Sparkles)
// =============================================================================
const canvas = document.getElementById("ambient-canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let particles = [];

function resizeCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = canvasWidth * window.devicePixelRatio;
  canvas.height = canvasHeight * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class FloatingParticle {
  constructor(isCelebration = false) {
    this.reset(isCelebration);
  }

  reset(isCelebration = false) {
    this.isCelebration = isCelebration;
    this.x = Math.random() * canvasWidth;
    this.y = isCelebration ? canvasHeight * 0.5 : canvasHeight + 20 + Math.random() * 50;
    this.size = 10 + Math.random() * 14;
    this.speedY = isCelebration ? (Math.random() - 0.7) * 7 : 0.6 + Math.random() * 1.1;
    this.speedX = (Math.random() - 0.5) * (isCelebration ? 6 : 1.2);
    this.opacity = isCelebration ? 1 : 0.2 + Math.random() * 0.55;
    this.symbol = HEART_SYMBOLS[Math.floor(Math.random() * HEART_SYMBOLS.length)];
    this.angle = Math.random() * Math.PI * 2;
    this.angularSpeed = (Math.random() - 0.5) * 0.03;
    this.fadeSpeed = isCelebration ? 0.012 + Math.random() * 0.01 : 0;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.angle) * 0.5;
    this.angle += this.angularSpeed;

    if (this.isCelebration) {
      this.speedY -= 0.15; // gravity
      this.opacity -= this.fadeSpeed;
      return this.opacity > 0;
    } else {
      if (this.y < -30) {
        this.reset();
      }
      return true;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.font = `${this.size}px -apple-system, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * 0.3);
    ctx.fillText(this.symbol, 0, 0);
    ctx.restore();
  }
}

// Populate ambient particles
const AMBIENT_COUNT = 24;
for (let i = 0; i < AMBIENT_COUNT; i++) {
  const p = new FloatingParticle(false);
  p.y = Math.random() * canvasHeight; // Distribute across screen initially
  particles.push(p);
}

// Confetti burst for celebrations
function launchConfetti() {
  for (let i = 0; i < 45; i++) {
    particles.push(new FloatingParticle(true));
  }
}

// Main Animation Loop
function animateAmbientCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    const isAlive = p.update();
    if (isAlive) {
      p.draw();
    } else {
      particles.splice(i, 1);
    }
  }

  requestAnimationFrame(animateAmbientCanvas);
}

animateAmbientCanvas();

// =============================================================================
// 11. INITIALIZATION
// =============================================================================
renderLetterContent(0);
initAutoplay();
console.log("💌 Digital Letter for Elis loaded successfully!");
