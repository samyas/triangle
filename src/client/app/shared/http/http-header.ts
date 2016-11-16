
import { Injectable, Inject } from '@angular/core';
import {BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';

@Injectable()
export class HttpHeader extends BaseRequestOptions {
  constructor(@Inject('webApiBaseUrl') private webApiBaseUrl:string) {
    super();
  }

  merge(options?:RequestOptionsArgs):RequestOptions {

    
    options.headers  = new Headers();

     options.url = 'http://localhost:8080' + options.url;


    options.headers.append('Accept', 'application/json');
    options.headers.append('Content-Type', 'application/json');

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    if (token){
           options.headers.append('Authorization', 'Bearer ' + token);
    }
    console.log('header url:'+ options.url);

      let result = super.merge(options);
        result.merge = this.merge;
        return result;
    
  }
}