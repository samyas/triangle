import { ModuleWithProviders }   from '@angular/core';
import { Route, RouterModule }  from '@angular/router';
import { AuthGuard } from '../shared/auth/index';

import { ProjectsComponent, ProjectListComponent, ProjectViewComponent, ProjectCreateComponent } from './index';


export const ProjectsRoutes: Route[] = [
  {
    path: 'projects',
    component: ProjectsComponent,
  //  canActivate: [AuthGuard],
    children: [
      { path: '',  component: ProjectListComponent },
      { path: 'view/:id', component: ProjectViewComponent },
      { path: 'create', component: ProjectCreateComponent }
    ]
  }
];

export const projectsRouting: ModuleWithProviders = RouterModule.forChild(ProjectsRoutes);
