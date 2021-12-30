class Progress {
  putEventHandler() {
    window.addEventListener('scroll', (() => {
      this.playProgress();
    }) as EventListener);
  }
  playProgress() {
    const progress = document.querySelector('.progress') as HTMLElement;
    const windowScroll = (document.body.scrollTop || document.documentElement.scrollTop) as number;
    const windowHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight) as number;
    const per = ((windowScroll / windowHeight) * 100) as number;
    progress.style.width = per + '%';
  }
}
export default Progress;
