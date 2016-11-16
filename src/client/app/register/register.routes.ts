import { ModuleWithProviders }   from '@angular/core';
import { Route, RouterModule }  from '@angular/router';

import { RegisterComponent} from './index';


export const RegisterRoutes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(RegisterRoutes);
