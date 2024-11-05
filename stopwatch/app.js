let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to format the time as HH:MM:SS
function formatTime(seconds) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;
    
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Pad single digit numbers with a leading zero
function pad(num) {
    return num < 10 ? `0${num}` : num;
}

// Start or Stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            seconds++;
            timeDisplay.textContent = formatTime(seconds);
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
    resetBtn.disabled = false; // Enable the reset button when the stopwatch is running or paused
}

// Reset the stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    timeDisplay.textContent = formatTime(seconds);
    startStopBtn.textContent = 'Start';
    resetBtn.disabled = true; // Disable the reset button when the stopwatch is reset
}

// Event Listeners
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
