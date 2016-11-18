import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, public router: Router) { }

    ngOnInit() { }


     login(username: string, password: string) {

        this.authService.login(username, password)
            .subscribe(result => {
                if (result === true) {
                  console.log('switch home');
                  this.router.navigate(['/companies']);
                } else {
                    console.log('Username or password is incorrect');
                }
            });
    }

    signup(event:any) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
