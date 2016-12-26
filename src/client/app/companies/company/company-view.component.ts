import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../companies.model';


/**
 * 
 * 
 * @export
 * @class CompanyViewComponent
 * @implements {OnInit}
 */
@Component({
  moduleId: module.id,
  selector: 'sd-company-view',
  templateUrl: 'company-view.component.html',
  styleUrls: ['company-view.component.css'],
})

export class CompanyViewComponent implements OnInit {

   /**
    * 
    * 
    * @type {Array<Company>}
    * @memberOf CompanyViewComponent
    */
   public companies: Array<Company>;
   /**
    * 
    * 
    * @type {string}
    * @memberOf CompanyViewComponent
    */
   public errorMessage: string;

  /**
   * Creates an instance of CompanyViewComponent.
   * 
   * @param {CompaniesService} companyService
   * 
   * @memberOf CompanyViewComponent
   */
  constructor(public companyService: CompaniesService) {}


  /**
   * 
   * 
   * 
   * @memberOf CompanyViewComponent
   */
  ngOnInit() {
    this.getCompanies();
  }

  /**
   * 
   * 
   * 
   * @memberOf CompanyViewComponent
   */
  getCompanies() {
    this.companyService.getCompanyList()
		     .subscribe(
		       companies => this.companies = companies,
		       error =>  this.errorMessage = <any>error
		       );
  }
}
