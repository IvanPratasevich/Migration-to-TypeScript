const pictureInnerContainer = document.querySelector('.picture-inner-container');
const images = [
  `assets/images/galery/galery1.jpg`,
  `assets/images/galery/galery2.jpg`,
  `assets/images/galery/galery3.jpg`,
  `assets/images/galery/galery4.jpg`,
  `assets/images/galery/galery5.jpg`,
  `assets/images/galery/galery6.jpg`,
  `assets/images/galery/galery7.jpg`,
  `assets/images/galery/galery8.jpg`,
  `assets/images/galery/galery9.jpg`,
  `assets/images/galery/galery10.jpg`,
  `assets/images/galery/galery11.jpg`,
  `assets/images/galery/galery12.jpg`,
  `assets/images/galery/galery13.jpg`,
  `assets/images/galery/galery14.jpg`,
  `assets/images/galery/galery15.jpg`,
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
      img.alt = 'galery' +`${item}`.replace(/\D+/g, '');
      pictureInnerContainer.append(img);
    });

  }
  createImages()