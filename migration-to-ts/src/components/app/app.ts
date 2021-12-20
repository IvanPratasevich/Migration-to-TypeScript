import AppController from '../controller/controller';
import AppView from '../view/appView';
import Article from '../interfaces/interfaces';
import Progress from '../progress/progress';

class App {
  controller: AppController;
  view: AppView;
  progress: Progress;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.progress = new Progress();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
      this.controller.getNews(e, (data?: Article) => this.view.drawNews(data))
    );
    this.controller.getSources((data?: Article) => this.view.drawSources(data));
    this.progress.putEventHandler();
  }
}

export default App;
