let isDown = false;

// drag the gallery
const dragScrollGallery = function() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const galleries = document.querySelectorAll('.uncommon-video-gallery-inner');
  galleries.forEach((gallery) => {
    let startX;
    let scrollLeft;
    gallery.addEventListener('mousedown', (e) => {
      console.log('mousedown');
      isDown = true;
      gallery.classList.add('dragging');
      gallery.classList.add('active');
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });
    gallery.addEventListener('mouseleave', () => {
      isDown = false;
      gallery.classList.remove('active');
    });
    gallery.addEventListener('mouseup', () => {
      gallery.classList.remove('dragging');
      isDown = false;
      gallery.classList.remove('active');
    });
    gallery.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      gallery.scrollLeft = scrollLeft - walk;
    });
  })
}



window.addEventListener('DOMContentLoaded', function() {
  dragScrollGallery();
  
  const videos = document.querySelectorAll('.uncommon-video-gallery video');
  videos.forEach(video => {

    video.addEventListener('click', function() {
      if (isDown) return;
      video.pause();
      const videoClone = video.cloneNode(true);
      const modalBg = document.createElement('div');
      modalBg.classList.add('uncommon-video-gallery-video-modal-bg');
      document.body.appendChild(modalBg);
      videoClone.classList.add('uncommon-video-gallery-video-modal');
      modalBg.appendChild(videoClone);
      videoClone.play();
      videoClone.style.pointerEvents = 'none'; 
      //otherwise clicking on the video starts it again, while closing the modal which results in sound being played
      videoClone.controls = true;
      modalBg.addEventListener('click', function() {
        videoClone.pause();
        videoClone.remove();
        modalBg.remove();
      }) 
    })
 })
})