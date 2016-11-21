import { Routes } from '@angular/router';


import { HomeRoutes } from './home/index';


 const aboutRoutes: Routes = [{
  path : 'about',
  loadChildren : 'app/about/about.module#AboutModule'
}];

export const routes: Routes = [
  ...HomeRoutes,
  ...aboutRoutes,
];



