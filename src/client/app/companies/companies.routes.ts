import { ModuleWithProviders }   from '@angular/core';
import { Route, RouterModule }  from '@angular/router';
import { AuthGuard } from '../shared/auth/index';

import { CompaniesComponent, CompanyListComponent, CompanyViewComponent, CompanyCreateComponent } from './index';


export const CompaniesRoutes: Route[] = [
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '',  component: CompanyListComponent },
      { path: 'view/:id', component: CompanyViewComponent },
      { path: 'create', component: CompanyCreateComponent }
    ]
  }
];

export const companiesRouting: ModuleWithProviders = RouterModule.forChild(CompaniesRoutes);
