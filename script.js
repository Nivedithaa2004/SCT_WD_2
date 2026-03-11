let timer;
let running = false;

let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").innerText = h + ":" + m + ":" + s;
}

function startTimer() {

    if (!running) {

        running = true;

        timer = setInterval(() => {

            seconds++;

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 1000);
    }
}

function pauseTimer() {

    running = false;
    clearInterval(timer);
}

function resetTimer() {

    pauseTimer();

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function lapTime() {

    if (!running) return;

    let lap = document.createElement("li");

    lap.textContent = "Lap: " + document.getElementById("display").innerText;

    document.getElementById("laps").appendChild(lap);
}