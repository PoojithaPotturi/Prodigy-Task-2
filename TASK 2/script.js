let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapNumber = 1;

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 10);
        document.getElementById('startStopBtn').innerHTML = 'Pause';
        running = true;
    } else {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        document.getElementById('startStopBtn').innerHTML = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    document.getElementById('display').innerHTML = '00:00:00.00';
    document.getElementById('startStopBtn').innerHTML = 'Start';
    running = false;
    difference = 0;
    lapNumber = 1;
    document.getElementById('lapsList').innerHTML = '';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

function recordLap() {
    if (running) {
        let lapTime = document.getElementById('display').innerHTML;
        let lapItem = document.createElement('li');
        lapItem.innerHTML = `Lap ${lapNumber}: ${lapTime}`;
        document.getElementById('lapsList').appendChild(lapItem);
        lapNumber++;
    }
}
