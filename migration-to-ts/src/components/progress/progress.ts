class Progress {
  putEventHandler() {
    window.addEventListener('scroll', ((event: CustomEvent) => {
      this.playProgress();
    }) as EventListener);
  }
  playProgress() {
    const progress = document.querySelector('.progress') as HTMLElement;
    let windowScroll = (document.body.scrollTop || document.documentElement.scrollTop) as number;
    let windowHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight) as number;
    let per = (windowScroll / windowHeight * 100) as number;
    progress.style.width = per + '%';
  }
}
export default Progress;
