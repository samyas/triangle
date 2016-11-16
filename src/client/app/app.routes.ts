import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { CompaniesRoutes } from './companies/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  //...CompaniesRoutes,
];



