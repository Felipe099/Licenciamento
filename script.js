import Countdown from "./countDown.js";

const tempoParaNiver = new Countdown("28 February 2023 12:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaNiver.total[index]
  })
  
}

mostrarTempo()
setInterval(mostrarTempo, 1000);
