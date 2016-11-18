import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../companies.model';

/**
 * This class represents the lazy loaded CompanyViewComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-company-view',
  templateUrl: 'company-view.component.html',
  styleUrls: ['company-view.component.css'],
})

export class CompanyViewComponent implements OnInit {

   public companies: Array<Company>;
   public errorMessage: string;
  /**
   * Creates an instance of the CompanyListComponent with the injected
   * CompaniesService.
   *
   * @param {CompaniesService} CompaniesService - The injected CompaniesService.
   */
  constructor(public companyService: CompaniesService) {}

  /**
   * Get the companies OnInit
   */
  ngOnInit() {
    this.getCompanies();
  }

  /**
   * Handle the companiesService observable
   */
  getCompanies() {
    this.companyService.getCompanyList()
		     .subscribe(
		       companies => this.companies = companies,
		       error =>  this.errorMessage = <any>error
		       );
  }
}
