let audio = document.querySelector("audio");
audio.load();
audio.play();
audio.loop = false;
audioDiv.style.backgroundImage = `url(${audioGif})`;
audio.addEventListener(
  "ended",
  () => {
    audio.pause();
    audioDiv.style.backgroundImage = `url(${audioNormal})`;
  },
  false
);
