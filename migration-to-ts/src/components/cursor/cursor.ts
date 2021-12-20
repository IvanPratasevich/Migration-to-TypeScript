class Cursor {
  mouseMove() {
    window.addEventListener('mousemove', ((event: MouseEvent) => {
      const cursor = document.querySelector('.cursor') as HTMLElement;
      let x = event.clientX as number;
      let y = event.clientY as number;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    }) as EventListener);
  }
  mouseLeave() {
    const browser = document.querySelector('.html') as HTMLElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;
    browser.addEventListener('mouseleave', ((event: MouseEvent) => {
      cursor.style.display = 'none';
    }) as EventListener);
  }
  mouseOver() {
    const browser = document.querySelector('.html') as HTMLElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;
    browser.addEventListener('mouseover', ((event: MouseEvent) => {
      cursor.style.display = 'block';
    }) as EventListener);
  }
  mouseHover() {
    document.addEventListener('mouseover', ((event: MouseEvent, target: HTMLElement) => {
      let e = event.target as Element;
      console.log(e.className);
      if (e.className == 'news__item') {
      }
    }) as EventListener);
  }
}
export default Cursor;
