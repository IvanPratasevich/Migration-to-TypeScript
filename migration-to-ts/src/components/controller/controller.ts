import AppLoader from './appLoader';
import { Endpoints } from '../enums/enums';

class AppController extends AppLoader {
  getSources(callback: () => void) {
    super.getResp(
      {
        endpoint: Endpoints.sources,
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: () => void) {
    let target = <HTMLElement>e.target;
    const newsContainer = <HTMLElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string = target.getAttribute('data-source-id')!;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoints.everything,
              options: {
                sources: Endpoints.sources,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLDivElement;
    }
  }
}

export default AppController;
