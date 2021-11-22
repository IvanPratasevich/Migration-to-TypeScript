const inputExplore = document.querySelector('#inputExplore');
const before = document.querySelector('#imgBefore');
inputExplore.addEventListener("input", () => {
  before.style.width = inputExplore.value + "%";
});
window.onscroll = function() {
  scroll()
};

function scroll() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
function toTop() {
    document.documentElement.scrollTop = 0;
}

let activeSlideNum = document.getElementById('active-slide-num')
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.carousel-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },

  // And if we need scrollbar
});
const swiper2 = new Swiper('.swiper2', {
  loop: true,
 spaceBetween: 45,
 slidesPerView: 3,
  pagination: {
    clickable: true,
   
  },

  // Navigation arrows
  navigation: {
    nextEl: '.video-slider-arrow-right',
    prevEl: '.video-slider-arrow-left',
  },

  // And if we need scrollbar
});
swiper.on('slideChange', function () {
        activeSlideNum.innerHTML = '0' + (swiper.realIndex + 1);
});

swiper2.on('slideChange', function () {
      let btns = document.querySelectorAll('#video-slider-arrow-circle')
      for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove('first-page')
        if (swiper2.realIndex + 1 == btns[i].dataset.indexNumber) {
          btns[i].classList.toggle('first-page');
        }
    }
});


const progress = document.querySelector('.vid');
const volume = document.querySelector('.volume');

progress.addEventListener('input', function() {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
volume.addEventListener('input', function() {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnByYXRhc2V2aWNoIiwiYSI6ImNrdXF0MXBiYzBxcDcyb3A1MHNpODJscjEifQ.vRJUMw65pBgDGt3NrjKWzA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/light-v10', // style URL
center:  [2.337, 48.8607], // starting position [lng, lat]
zoom: 16 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({ color: "black" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3330, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);


  function stopVideo(){
    let videos = document.querySelectorAll('#ytb-video')
    for(let i = 0; i < videos.length; i++){
      videos[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }