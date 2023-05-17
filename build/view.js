/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const animateGallery = function () {
  if (motion) {
    const gallery = document.querySelector('.uncommon-video-gallery-inner'),
      innerWidth = document.querySelector('.uncommon-video-gallery-inner').scrollWidth,
      excessWidth = innerWidth - window.innerWidth,
      innerHeight = document.querySelector('.uncommon-video-gallery-inner').offsetHeight;
    motion.scroll(motion.animate(".uncommon-video-gallery-inner", {
      x: [`0px`, `-${excessWidth + 0.035 * window.innerWidth}px`]
    }), {
      target: document.querySelector('.uncommon-video-gallery'),
      offset: [`${innerHeight}px end`, "150% end"]
    });
  }
};
window.addEventListener('load', function () {
  animateGallery();
  const videos = document.querySelectorAll('.uncommon-video-gallery video');
  videos.forEach(video => {
    video.addEventListener('click', function () {
      const videoClone = video.cloneNode(true);
      const modalBg = document.createElement('div');
      modalBg.classList.add('uncommon-video-gallery-video-modal-bg');
      document.body.appendChild(modalBg);
      videoClone.classList.add('uncommon-video-gallery-video-modal');
      modalBg.appendChild(videoClone);
      videoClone.play();
      videoClone.addEventListener('click', function () {
        videoClone.pause();
        videoClone.remove();
        modalBg.remove();
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map