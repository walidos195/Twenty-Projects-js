const chrono = document.querySelector('.chrono');
const pause = document.querySelector('.pause');
const btnStart = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycle = document.querySelector('.cycle');

let timeInit = 1800;
let timeBreack = 300;
let nbrCycle = 0;
let boolPause = false;
let stop = true;
cycle.innerText = nbrCycle;
toMinutes(timeInit);
function toMinutes(time) {

    const minutes = Math.floor(time / 60);
    const secondes = time - (minutes * 60);
    let zerom = "";
    let zeros = "";
    if (minutes < 10) {
        zerom = '0';
    }
    if (secondes < 10) {
        zeros = '0';
    }
    const resultat = `${zerom}${minutes} : ${zeros}${secondes}`

    return resultat;
}

function setChrono() {
    if (timeInit <= 0) {
        return

    }
    if (boolPause) {
        return
    }
    timeInit -= 1;
    chrono.innerText = toMinutes(timeInit);
}

function setBreack() {
    if (timeBreack <= 0) {
        return

    }
    if (boolPause) {
        return
    }
    timeBreack -= 1;
    pause.innerText = toMinutes(timeBreack);
}

function start() {
    if (timeInit > 0 && stop === true) {
        stop = false;
        setInterval(main, 1000);
        
    }
    
}
function reset() {
    timeInit = 1800;
    timeBreack = 300;
    nbrCycle = 0;
    boolPause = false;
    cycle.innerText = nbrCycle;
    stop=true;
    chrono.innerText= toMinutes(timeInit);
    
    pause.innerText = toMinutes(timeBreack);
}

function main() {

    if (stop === true) { return; }
    if (timeInit > 0) {
        setChrono();
    }
    if (timeInit <= 0 && timeBreack > 0) {
        setBreack();
    }
    if (timeInit <= 0 && timeBreack <= 0) {
        nbrCycle += 1;
        cycle.innerText = nbrCycle;
        timeInit = 1800;
        timeBreack = 300;
        pause.innerText = toMinutes(timeBreack);
        setChrono();
    }
}

btnPause.addEventListener('click', (e) => {
    if (boolPause) {
        boolPause = false;
        btnPause.innerHTML = "Pause";
    }
    else {
        boolPause = true;
        btnPause.innerHTML = "Play";

    }
}
)
btnStart.addEventListener('click', (e) => {
    start();
}
)
btnReset.addEventListener('click', (e) => {
    reset();
}
)