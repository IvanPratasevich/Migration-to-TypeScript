import Spa from '../spa/spa';

class App {
  private spa: Spa;
  constructor() {
    this.spa = new Spa();
  }

  start() {
    this.spa.addEventListener();
  }
}

export default App;
