import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './index';


export const aboutRoutes: Route[] = [
  {
    path: '',
    component: AboutComponent
  }
];

export const aboutRouting : ModuleWithProviders = RouterModule.forChild(aboutRoutes);