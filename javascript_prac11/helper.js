export function formatTime(min, sec) {
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

