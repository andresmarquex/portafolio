const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

var video = document.getElementById("video1");
window.addEventListener("scroll", function() {
  var videoPosition = video.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  if (videoPosition.top + videoPosition.height >= 0 && videoPosition.bottom - videoPosition.height <= windowHeight) {
	video.play();
  } else {
	video.pause();
  }
});