import { HomeComponent, Page1Component, Page2Component, ErrorComponent, Template } from '../templates/templates';
export interface Routes {
  path: string;
  component: Template;
}
export const routes: Array<Routes> = [
  { path: '/home', component: HomeComponent },
  { path: '/page1', component: Page1Component },
  { path: '/page2', component: Page2Component },
  { path: '/error', component: ErrorComponent },
];
