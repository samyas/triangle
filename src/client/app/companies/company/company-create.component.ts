import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from '../companies.model';

/**
 * This class represents the lazy loaded CompanyViewComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-company-create',
  templateUrl: 'company-create.component.html',
  styleUrls: ['company-create.component.css'],
})

export class CompanyCreateComponent implements OnInit {

   public company: Company = new Company('','', '', '', '', '', '','', '');
   public errorMessage: string;
   
   
    businessTypes = ['Really Smart', 'Super Flexible', 'Weather Changer'];

   companyForm: FormGroup;
  /**
   * Creates an instance of the CompanyListComponent with the injected
   * CompaniesService.
   *
   * @param {CompaniesService} CompaniesService - The injected CompaniesService.
   */
  constructor(public companyService: CompaniesService, private fb: FormBuilder) {}

  /**
   * OnInit
   */
  ngOnInit() {
     this.buildForm();
  }

  /**
   * Handle the companiesService observable
   */

  onSubmit() {
    this.company = this.companyForm.value;
    this.companyService.createCompany(this.company)
		     .subscribe(
		       id => this.company.id = id,
		       error =>  this.errorMessage = <any>error
		       );
  }

   buildForm(): void {
    this.companyForm = this.fb.group({
      'name': [this.company.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
      ],
      'email':    [this.company.email, Validators.required],
       'vat':    [this.company.vat, Validators.required]
    });
    this.companyForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.companyForm) { return; }
    const form = this.companyForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors : any = {
    'name': '',
    'email': '',
    'vat': '',
  };
  validationMessages : any = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'vat': {
      'required': 'Vat is required.'
    }
  };
}