// =====================================================================
// MAYRA.exe — Birthday Edition V3
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
  "Porque haces que los días normales se sientan mucho mejor.",
  "Porque tu sonrisa cambia por completo la energía del lugar.",
  "Porque tienes una forma muy tuya de hacer todo más divertido.",
  "Porque contigo las conversaciones nunca se sienten vacías.",
  "Porque me encanta tu vibra entre aventurera, bonita y caótica.",
  "Porque siempre hay algo en ti que me sorprende.",
  "Porque sabes disfrutar los pequeños momentos.",
  "Porque eres tú, sin copia.",
  "Porque me gusta cómo se siente estar contigo.",
  "Porque haces que hasta los planes simples se sientan especiales.",
  "Porque admiro tu energía.",
  "Porque tu presencia se nota de la mejor forma.",
  "Porque tienes un corazón bonito.",
  "Porque me gusta verte emocionada por cosas que te gustan.",
  "Porque me encanta cuando te ríes de verdad.",
  "Porque haces que quiera crear recuerdos bonitos.",
  "Porque contigo hay ternura y hay fuego al mismo tiempo.",
  "Porque eres linda por dentro y por fuera.",
  "Porque hay una suavidad en ti que no es fácil de explicar.",
  "Porque me haces querer ponerle intención a las cosas.",
  "Porque me gusta consentirte.",
  "Porque me gusta hacer cosas pensadas para ti.",
  "Porque tienes algo que simplemente jala.",
  "Porque contigo sí dan ganas de planear.",
  "Porque haces que la vida se sienta menos plana.",
  "Porque me gustan nuestras historias.",
  "Porque todavía siento que hay muchas más por vivir.",
  "Porque tú sí inspiras regalos con alma.",
  "Porque eres Mayra, and honestly that’s enough."
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

enterBtn?.addEventListener("click", () => {
  introOverlay?.classList.add("hidden-overlay");
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
  const dpr = window.devicePixelRatio || 1;
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.scale(dpr, dpr);

  const colors = ["#7f927d", "#617360", "#bea57b", "#d8c7a8", "#8ea28c", "#344037"];
  const pieces = Array.from({ length: 140 }, () => ({
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
