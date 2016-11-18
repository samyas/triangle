import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Company } from './companies.model';

@Injectable()
export class CompaniesService {

  public static readonly COMPANY_URI = '/api/companies';

  constructor(private http: Http) { }

  getCompanyList(): Observable<Array<Company>> {
    return this.http.get(CompaniesService.COMPANY_URI).map((res: Response) => res.json());
  }

  createCompany(company: Company): Observable<string> {
    return this.http.post(CompaniesService.COMPANY_URI, JSON.stringify(company)).map((res: Response) => res.json());
  }

}
