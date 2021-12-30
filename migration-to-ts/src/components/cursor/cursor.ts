class Cursor {
  mouseMove() {
    window.addEventListener('mousemove', ((event: MouseEvent) => {
      const cursor = document.querySelector('.cursor') as HTMLElement;
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    }) as EventListener);
  }
  mouseLeave() {
    const browser = document.querySelector('.html') as HTMLElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;
    browser.addEventListener('mouseleave', (() => {
      cursor.style.display = 'none';
    }) as EventListener);
  }
  mouseOver() {
    const browser = document.querySelector('.html') as HTMLElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;
    browser.addEventListener('mouseover', (() => {
      cursor.style.display = 'block';
    }) as EventListener);
  }
  mouseHover() {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    document.addEventListener('mouseover', ((event: MouseEvent) => {
      const e = event.target as Element;
      if (e.tagName == 'A') {
        cursor.id = 'animation';
      } else {
        cursor.id = '';
      }
    }) as EventListener);
  }
}
export default Cursor;
