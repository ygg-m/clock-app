function displayTime() {
  let time = new Date();
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");
  let clockElement = document.getElementById("clock");
  clockElement.innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(displayTime, 1000);

displayTime();
