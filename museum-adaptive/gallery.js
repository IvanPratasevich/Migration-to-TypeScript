const pictureInnerContainer = document.querySelector('.picture-inner-container');
const images = [
  `assets/images/galery/galery1.webp`,
  `assets/images/galery/galery2.webp`,
  `assets/images/galery/galery3.webp`,
  `assets/images/galery/galery4.webp`,
  `assets/images/galery/galery5.webp`,
  `assets/images/galery/galery6.webp`,
  `assets/images/galery/galery7.webp`,
  `assets/images/galery/galery8.webp`,
  `assets/images/galery/galery9.webp`,
  `assets/images/galery/galery10.webp`,
  `assets/images/galery/galery11.webp`,
  `assets/images/galery/galery12.webp`,
  `assets/images/galery/galery13.webp`,
  `assets/images/galery/galery14.webp`,
  `assets/images/galery/galery15.webp`,
  ];
function shuffle(images) {
  images.sort(() => Math.random() - 0.5);
}
  function createImages(){
    shuffle(images)
    let result = images.map(function(item) {
      const img = document.createElement('img');
      img.classList.add('gallery-img')
      img.src = `${item}`;
      img.loading = 'lazy';
      img.alt = 'galery' +`${item}`.replace(/\D+/g, '');
      pictureInnerContainer.append(img);
    });

  }
  createImages()