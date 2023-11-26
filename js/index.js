function hideObject(id) {
    document.getElementById(id).style.display = 'none';
  }

windows.addEventListener('load', () =>{
    const contenedor_loader=document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})

var video = document.getElementById("video1")

window.addEventListener("scroll", function() {
    var videoPosition = video.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    if (videoPosition.top + videoPosition.height >= 0 && videoPosition.bottom - videoPosition.height <= windowHeight) {
    video.play();
    } else {
    video.pause();
    if (window.scrollY === 0) {
        video.currentTime = 0;
    }
    }
})