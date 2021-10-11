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