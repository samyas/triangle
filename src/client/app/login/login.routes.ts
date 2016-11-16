import { ModuleWithProviders }   from '@angular/core';
import { Route, RouterModule }  from '@angular/router';

import { LoginComponent} from './index';


export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
