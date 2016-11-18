import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './register.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {

    private loginUrl = 'http://localhost:8080/employees';
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url

    // Fetch all existing comments
    getUsers(): Observable<User[]> {
        // ...using get request
        return this.http.get(this.loginUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch(this.handleError);
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    private handleError(error: Response | any) {
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
