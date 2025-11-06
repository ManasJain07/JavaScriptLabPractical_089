import { formatTime } from "./helper.js";

export function startCountdown(duration, display) {
  let time = duration;

  const timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    display.textContent = `Next session starts in ${formatTime(minutes, seconds)}`;

    if (time <= 60) {
      display.classList.add("red");  // < 1 minute => turn red
    }

    time--;

    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
      display.classList.remove("red");
    }
  }, 1000);
}

export function highlightActiveSession() {
  const sessions = document.querySelectorAll(".session");
  const now = new Date();
  const currentHour = now.getHours();

  sessions.forEach(session => {
    const hour = parseInt(session.dataset.time.split(":")[0]);
    if (hour === currentHour) session.classList.add("active");
    else session.classList.remove("active");
  });
}
