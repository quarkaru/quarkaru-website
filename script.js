// Play audio files
let audio1 = new Audio('audio/home1.mp3');
let audio2 = new Audio('audio/home2.mp3');

audio1.loop = true;
audio2.loop = true;

audio1.volume = 1;
audio2.volume = 0.5;

// Play both audios
window.onload = function() {
    audio1.play();
    audio2.play();
};
