let segundosC =0;
let minutosC =0;
let horasC =0;
let intervaloCronometro;

document.getElementById("startCronometro").addEventListener("click",() => { clearInterval(intervaloCronometro);
    intervaloCronometro = setInterval(() => {
        segundosC++;
        if (segundosC ==60) {
            segundosC =0;
            minutosC++;
            if (minutosC ==60){
                minutosC =0;
                horasC++;
            }
        }
        document.getElementById("displayCronometro").textContent = 
        `${String(horasC).padStart(2, "0")}:${String(minutosC).padStart(2, "0")}:${String(segundosC).padStart(2, "0")}`;
  }, 1000);
});

document.getElementById("pauseCronometro").addEventListener("click", () => { clearInterval(intervaloCronometro);
});

document.getElementById("resetCronometro").addEventListener("click", () => { clearInterval(intervaloCronometro);
    segundosC = minutosC = horasC =0;
    document.getElementById("displayCronometro").textContent = "00:00:00"
});

let tempoRestante;
let intervaloTimer;

document.getElementById("startTimer").addEventListener("click", () => {
    let min = parseInt(document.getElementById("minutos").value) || 0;
    let seg = parseInt(document.getElementById("segundos").value) || 0;
    tempoRestante = (min * 60) + seg;

    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(() => {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;

        document.getElementById("displayTimer").textContent = 
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

        if (tempoRestante <= 0) {
            clearInterval(intervaloTimer);
            alert("⏰ Tempo esgotado! ⏰");
        } else {
            tempoRestante--;
        }
    }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(intervaloTimer);
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(intervaloTimer);
    document.getElementById("displayTimer").textContent = "00:00";
});