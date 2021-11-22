class Button {
  constructor(btn) {
    this.btn = btn;
  }

  rotateBtn() {
    this.btn.classList.toggle('rotate');
  }
}
class Section {
  constructor(block) {
    this.block = block;
  }

  slideLeft() {
    this.block.classList.toggle('slideLeft');
  }

  hideBlock() {
    this.block.classList.toggle('hide');
  }
}

// settings
const settings = new Button(document.querySelector('.settings'));
const menuMain = new Section(document.querySelector('.menu-main'));
document.querySelector('.settings').addEventListener('click', () => {
  settings.rotateBtn();
  menuMain.slideLeft();
});
console.log('Привет. Не успел cделать задание. Проверь, пожалуйста, задание ещё раз в четверг вечером. Спасибо.');
