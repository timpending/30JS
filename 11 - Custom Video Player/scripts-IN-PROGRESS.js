const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
    // .play() which a methods on player
    // .pause()
   
    // determine METHOD NAME using a ternary
    // then immediately invoke it
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();

    if (video.paused){ 
        video.play();
    } else {
        video.pause(); 
    }
}

function updatePlayButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

/* Event Listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));
