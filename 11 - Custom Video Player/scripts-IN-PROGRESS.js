const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');


function togglePlay() {
    // .play() which a methods on player
    // .pause()
    if (video.paused){ 
        video.play();
    } else {
        video.pause(); 
    }

    // determine METHOD NAME using a ternary
    // then immediately invoke it
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();


}

/* Funtions */
function updatePlayButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function changeRange() {
    video[this.name] = this.value;
}

function handleProgress() {
    // update flex-basis to reflect % to match completion %
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`; 
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function maximizeVideo() {
    video.requestFullscreen();
}

/* Event Listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);
// progress event also is for updating time

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', changeRange));
ranges.forEach(range => range.addEventListener('mousemove', changeRange));
fullscreen.addEventListener('click', maximizeVideo);

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);