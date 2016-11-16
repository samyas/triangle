import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {User} from './register.model';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RegisterService {



      // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private loginUrl = 'http://localhost:8080/employees';
    // private commentsUrl = 'http://578f454de2fa491100415d08.mockapi.io/api/Comment'; 
     
     // Fetch all existing comments
     getUsers() : Observable<User[]>{
         // ...using get request
         return this.http.get(this.loginUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                          .catch(this.handleError);
                        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }


     private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}