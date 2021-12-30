import AppController from '../controller/controller';
import AppView from '../view/appView';
import { Article } from '../interfaces/interfaces';
import Progress from '../progress/progress';
import Cursor from '../cursor/cursor';

class App {
  private controller: AppController;
  private view: AppView;
  private progress: Progress;
  private cursor: Cursor;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.progress = new Progress();
    this.cursor = new Cursor();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data?: Article) => this.view.drawNews(data))
    );
    this.controller.getSources((data?: Article) => this.view.drawSources(data));
    this.progress.putEventHandler();
    this.cursor.mouseMove();
    this.cursor.mouseLeave();
    this.cursor.mouseOver();
    this.cursor.mouseHover();
  }
}

export default App;
