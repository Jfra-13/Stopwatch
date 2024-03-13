const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runnningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runnningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runnningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runnningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runnningTime);
    },1000)
}

const calculateTime = runnningTime => {
    const total_seconds = Math.floor(runnningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const diplay_seconds = (total_seconds % 60).toString().padStart(2,"0");
    const diplay_minutes =  total_minutes.toString().padStart(2,"0");

    return `${diplay_minutes}:${diplay_seconds}`
}


