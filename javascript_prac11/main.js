import { startCountdown, highlightActiveSession } from "./timer.js";
import { addDynamicSession, handleViewportChange } from "./ui.js";

const countdownDisplay = document.getElementById("countdown");
startCountdown(300, countdownDisplay);  

setInterval(highlightActiveSession, 60000);
highlightActiveSession();

document.getElementById("addSession").onclick = addDynamicSession;

window.addEventListener("resize", handleViewportChange);
handleViewportChange();
