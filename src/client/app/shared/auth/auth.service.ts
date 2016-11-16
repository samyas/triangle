import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  public token: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;


    constructor(private http: Http) {
             // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        if (this.token){
            this.isLoggedIn = true;
        }
    }

  login(username: string, password: string): Observable<boolean> {
      let body = JSON.stringify({ username: username, password: password });
        return this.http.post('/api/auth', body)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.text();
                if (token) {
                    // set token property
                    this.token = token;
                    this.isLoggedIn = true;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


  logout(): void {
    this.isLoggedIn = false;
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/