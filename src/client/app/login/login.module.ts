import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { AuthService } from '../shared/index';
import { NameListService } from '../shared/name-list/index';

import { loginRouting } from './login.routes';

@NgModule({
  imports: [CommonModule, SharedModule, loginRouting],
  declarations: [LoginComponent],
  providers: [NameListService, AuthService,  {
      provide: 'webApiBaseUrl',
       useValue: 'http://localhost:8080/'
  }]
})
export class LoginModule { }
