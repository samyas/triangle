import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { NameListService } from '../shared/name-list/index';
import { ProjectsService } from './projects.service';
import { projectsRouting } from './projects.routes';

import { SelectModule } from 'ng2-select/ng2-select';
import { TagInputModule } from 'ng2-tag-input';
//import * as ckeditor from 'ckeditor';

require('ckeditor/ckeditor.js');

import { CKEditorModule } from 'ng2-ckeditor';



@NgModule({
  imports: [CommonModule, SelectModule, TagInputModule, CKEditorModule, SharedModule, ReactiveFormsModule,  projectsRouting],
  declarations: [ProjectsComponent, ProjectViewComponent, ProjectListComponent, ProjectCreateComponent],
  providers: [NameListService, ProjectsService]
})
export class ProjectsModule { }
