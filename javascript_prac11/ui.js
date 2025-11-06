export function addDynamicSession() {
  const div = document.getElementById("sessions");
  const newDiv = document.createElement("div");
  newDiv.className = "session";
  newDiv.dataset.time = "12:00";
  newDiv.textContent = "New Session - 12:00 PM";
  div.appendChild(newDiv);
}

export function handleViewportChange() {
  if (window.innerWidth < 500) {
    document.body.style.fontSize = "14px";
  } else {
    document.body.style.fontSize = "16px";
  }
}
