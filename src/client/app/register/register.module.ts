import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { NameListService } from '../shared/name-list/index';

import { registerRouting } from './register.routes';

@NgModule({
  imports: [CommonModule, SharedModule, registerRouting],
  declarations: [RegisterComponent],
  providers: [NameListService, RegisterService]
})
export class RegisterModule { }
