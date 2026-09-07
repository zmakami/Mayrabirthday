// =====================================================================
// Mayra's 29th — Birthday Edition V3.3.1 Local Audio Fix
// AQUÍ ESTÁN LAS PARTES MÁS FÁCILES DE EDITAR.
// =====================================================================

// ==========================================================
// FECHA DEL VIAJE / COUNTDOWN
// Cambia esta fecha si quieres ajustar el countdown.
// Formato recomendado: YYYY-MM-DDTHH:MM:SS
// ==========================================================
const tripDate = "2026-09-13T09:00:00";

// ==========================================================
// 29 THINGS I LOVE ABOUT YOU
// Puedes editar cada frase aquí.
// Si quieres cambiar el contenido, solo reemplaza los textos.
// Mantén idealmente 29 elementos.
// ==========================================================
const reasons = [
  "Porque cuando dices “vamos leve” sé que probablemente terminaremos negociando el pace como si fuera tratado internacional.",
  "Porque puedes terminar una corrida y aun así verte más arreglada que yo antes de salir de casa.",
  "Porque contigo “una foto rápida” puede convertirse en una producción de 27 tomas… y sí, al final valió la pena.",
  "Porque tu Virgo interior puede detectar un plan mal organizado a kilómetros de distancia.",
  "Porque puedes amar correr, verte fashion y cantar Intocable en la misma personalidad sin que choque nada.",
  "Porque cada vez que digo “tengo una idea” no huyes inmediatamente. Eso ya es amor o pésimo juicio.",
  "Porque haces que un brunch se sienta como evento oficial del calendario.",
  "Porque tienes talento para decir “estoy bien” con una cara que claramente dice que hay una presentación de PowerPoint pendiente.",
  "Porque contigo hasta perder tiempo se siente como parte del itinerario.",
  "Porque eres de esas personas que sí justifican hacer una página entera en GitHub para un cumpleaños.",
  "Porque probablemente vas a criticar algún detallito de esta página y, peor aún, probablemente vas a tener razón.",
  "Porque tu sentido de la moda hace que yo reevalúe cosas que cinco minutos antes juraba que se veían bien.",
  "Porque puedes convertir una caminata normal en sesión de fotos sin previo aviso.",
  "Porque cuando algo te emociona se te nota demasiado y esa versión tuya me encanta.",
  "Porque haces que un viaje de tres días necesite más planeación que algunas empresas pequeñas.",
  "Porque si hay café, comida rica, correr o una aventura, es bastante fácil convencerte.",
  "Porque tienes ese balance raro entre tierna y capaz de destruirme con una sola mirada.",
  "Porque tu sarcasmo llega en el momento exacto en que yo ya estaba hablando demasiadas mamadas.",
  "Porque eres competitiva incluso cuando nadie anunció que era competencia.",
  "Porque contigo “tranqui” casi nunca significa realmente tranqui.",
  "Porque sabes exactamente cuándo necesitas un outfit nuevo para una ocasión que técnicamente no requería outfit nuevo.",
  "Porque me haces querer planear cosas ridículamente específicas solo para verte emocionada.",
  "Porque tienes amigas en CDMX y de alguna forma este regalo ya incluye hasta brunch DLC.",
  "Porque tu reacción a una buena sorpresa vale todo el estrés de intentar que no descubras nada antes.",
  "Porque puedes hacer que me preocupe por el restaurante, la música, el QR, el código, las fotos y todavía piense: sí, faltaba algo.",
  "Porque contigo siempre termina existiendo un inside joke que nadie más entendería.",
  "Porque eres la razón por la que “nomás un viaje” terminó siendo una experiencia con countdown y easter eggs.",
  "Porque incluso cuando me desesperas poquito, cinco minutos después ya estoy pensando qué hacer contigo el siguiente fin.",
  "Porque debajo de todos los chistes, planes y caos, la verdad simple es que me encanta compartir mi vida contigo."
];

// ==========================================================
// INTRO / BOOT SEQUENCE
// ==========================================================
const bootSteps = [
  ["Initializing birthday protocol...", 16],
  ["Passenger found: MAYRA", 32],
  ["Checking surprise authorization...", 49],
  ["Travel companion confirmed: DANIEL", 68],
  ["Loading destination reveal...", 84],
  ["Plan Maestro ready.", 100]
];

const introOverlay = document.getElementById("introOverlay");
const bootLine = document.getElementById("bootLine");
const bootBar = document.getElementById("bootBar");
const enterBtn = document.getElementById("enterBtn");

let bootIndex = 0;

function runBootSequence() {
  if (!bootLine || !bootBar || !enterBtn) return;
  if (bootIndex >= bootSteps.length) {
    enterBtn.classList.remove("hidden");
    return;
  }

  const [text, progress] = bootSteps[bootIndex];
  bootLine.textContent = text;
  bootBar.style.width = progress + "%";
  bootIndex++;
  setTimeout(runBootSequence, 720);
}
setTimeout(runBootSequence, 500);

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function markMusicAsPlaying() {
  musicToggle?.classList.remove("hidden");
  musicToggle?.classList.remove("is-paused");
  musicToggle?.setAttribute("aria-label", "Pause music");
  musicToggle?.setAttribute("aria-pressed", "true");
  if (musicToggle) musicToggle.textContent = "♪";
}

function startLocalSoundtrack() {
  if (!bgMusic) return;

  bgMusic.volume = 0.48;

  // IMPORTANT:
  // Do NOT await play() here. Some mobile browsers can keep the
  // playback promise pending while the media loads. The site must
  // open immediately even if audio is slow, missing, or blocked.
  try {
    const playAttempt = bgMusic.play();

    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt
        .then(markMusicAsPlaying)
        .catch((error) => {
          console.warn("Background audio could not start:", error);
        });
    } else {
      markMusicAsPlaying();
    }
  } catch (error) {
    console.warn("Background audio could not start:", error);
  }
}

enterBtn?.addEventListener("click", () => {
  // GO ALWAYS opens the experience immediately.
  // Audio is attempted from this same user tap, but never blocks entry.
  introOverlay?.classList.add("hidden-overlay");
  startLocalSoundtrack();
});

musicToggle?.addEventListener("click", async () => {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicToggle.classList.remove("is-paused");
      musicToggle.setAttribute("aria-label", "Pause music");
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.textContent = "♪";
    } catch (error) {
      console.warn("Audio resume failed:", error);
    }
  } else {
    bgMusic.pause();
    musicToggle.classList.add("is-paused");
    musicToggle.setAttribute("aria-label", "Play music");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.textContent = "♫";
  }
});

// ==========================================================
// COUNTDOWN
// ==========================================================
function updateCountdown() {
  const target = new Date(tripDate).getTime();
  const now = new Date().getTime();
  const gap = target - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (gap <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================================
// REASONS GRID RENDER
// ==========================================================
function renderReasons() {
  const grid = document.getElementById("reasonsGrid");
  if (!grid) return;

  grid.innerHTML = reasons.map((reason, i) => `
    <article class="reason-card">
      <div class="reason-number">${i + 1}</div>
      <p>${reason}</p>
    </article>
  `).join("");
}
renderReasons();

// ==========================================================
// SURPRISE REVEAL
// ==========================================================
const unlockBtn = document.getElementById("unlockBtn");
const surprisePanel = document.getElementById("surprisePanel");

unlockBtn?.addEventListener("click", () => {
  unlockBtn.classList.add("hidden");
  surprisePanel?.classList.remove("hidden");
  launchConfetti();
});

// ==========================================================
// CONFETTI
// ==========================================================
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.scale(dpr, dpr);

  const colors = ["#7f927d", "#617360", "#bea57b", "#d8c7a8", "#8ea28c", "#344037"];
  const particleCount = innerWidth < 600 ? 90 : 140;
  const pieces = Array.from({ length: particleCount }, () => ({
    x: Math.random() * innerWidth,
    y: -20 - Math.random() * 220,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 12,
    speed: 2.2 + Math.random() * 4,
    drift: -1.8 + Math.random() * 3.6,
    rot: Math.random() * Math.PI,
    spin: -0.12 + Math.random() * 0.24,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    pieces.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rot += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (frame < 290) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
  }

  draw();
}
