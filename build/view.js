window.addEventListener("load",(function(){!function(){if(motion){document.querySelector(".uncommon-video-gallery-inner");const e=document.querySelector(".uncommon-video-gallery-inner").scrollWidth-window.innerWidth,o=document.querySelector(".uncommon-video-gallery-inner").offsetHeight;motion.scroll(motion.animate(".uncommon-video-gallery-inner",{x:["0px",`-${e+.035*window.innerWidth}px`]}),{target:document.querySelector(".uncommon-video-gallery"),offset:[`${o}px end`,"150% end"]})}}(),document.querySelectorAll(".uncommon-video-gallery video").forEach((e=>{e.addEventListener("click",(function(){const o=e.cloneNode(!0),n=document.createElement("div");n.classList.add("uncommon-video-gallery-video-modal-bg"),document.body.appendChild(n),o.classList.add("uncommon-video-gallery-video-modal"),n.appendChild(o),o.play(),o.addEventListener("click",(function(){o.pause(),o.remove(),n.remove()}))}))}))}));