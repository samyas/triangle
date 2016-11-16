import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { CompaniesComponent } from './companies.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyViewComponent } from './company/company-view.component';
import { CompanyCreateComponent } from './company/company-create.component';
import { NameListService } from '../shared/name-list/index';
import { CompaniesService } from './companies.service';
import { companiesRouting } from './companies.routes';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule,  companiesRouting],
  declarations: [CompaniesComponent, CompanyViewComponent, CompanyListComponent, CompanyCreateComponent],
  providers: [NameListService, CompaniesService]
})
export class CompaniesModule { }
