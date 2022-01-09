import { ErrorComponent } from '../templates/templates';
import { routes, Routes } from '../routes/routes';
class Spa {
  parseLocation() {
    return location.hash.slice(1).toLowerCase();
  }
  findComponentByPath(path: string, routes: Array<Routes>) {
    return routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
  }
  router() {
    const { component = ErrorComponent } = this.findComponentByPath(this.parseLocation(), routes) || {};
    (document.getElementById('app') as HTMLElement).innerHTML = component.render();
  }
  addEventListener() {
    window.addEventListener('hashchange', () => {
      this.router();
    });
    window.addEventListener('load', () => {
      window.location.hash = '/home';
      this.router();
    });
  }
}
export default Spa;
