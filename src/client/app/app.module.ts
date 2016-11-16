import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http";
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpInterceptor, HttpHeader } from './shared/index';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { CompaniesModule } from './companies/companies.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, CompaniesModule, LoginModule, RegisterModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    {
      provide: 'webApiBaseUrl',
       useValue: 'http://localhost:8080/' 
  },
  {
      provide: RequestOptions,
      useClass: HttpHeader 
  },
  
{
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) =>
            new HttpInterceptor(backend, defaultOptions),
        deps: [ XHRBackend, RequestOptions ]
  },




  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
