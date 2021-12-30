import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'd25262137a8a4d5da052d89074d95acf',
    });
  }
}

export default AppLoader;
