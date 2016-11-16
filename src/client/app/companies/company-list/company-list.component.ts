import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../companies.model';

/**
 * This class represents the lazy loaded CompanyListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-company-list',
  templateUrl: 'company-list.component.html',
  styleUrls: ['company-list.component.css'],
})

export class CompanyListComponent implements OnInit {

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
