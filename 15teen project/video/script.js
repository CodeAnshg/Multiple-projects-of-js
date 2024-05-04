const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
switchBtn.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    switchBtn.classList.remove("playing");
  } else {
    video.pause();
    switchBtn.classList.add("playing");
  }
});
