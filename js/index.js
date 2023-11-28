function hideObject(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  const images = document.querySelectorAll('.thumbnail img');
  const selectedImage = document.querySelector('.selected-image');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;

  function showImage(index) {
    selectedImage.src = images[index].src;
    currentIndex = index;
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  function autoChange() {
    nextImage();
  }

  setInterval(autoChange, 5000);

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      showImage(index);
    });
  });

  prev.addEventListener('click', prevImage);
  next.addEventListener('click', nextImage);
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

