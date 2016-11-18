import { Component, OnInit } from '@angular/core';

import { RegisterService } from './register.service';

@Component({
    moduleId: module.id,
    selector: 'sd-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor(private registerService: RegisterService) { }

    ngOnInit() { this.getUsers();}

    getUsers() {
        this.registerService.getUsers().subscribe(
                                users => {
                                  console.log('success!!');
                                },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}
