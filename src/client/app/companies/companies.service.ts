import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Company } from './companies.model';

@Injectable()
export class CompaniesService {

  public static readonly COMPANY_URI = '/api/companies';
 
  constructor(private http: Http) {}

  getCompanyList(): Observable<Array<Company>> {
    return this.http.get(CompaniesService.COMPANY_URI).map((res: Response) => res.json());
  }

  createCompany(company: Company): Observable<string> {
    return this.http.post(CompaniesService.COMPANY_URI, JSON.stringify(company)).map((res: Response) => res.json());
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/