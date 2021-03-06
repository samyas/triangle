import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HttpInterceptor, HttpHeader } from './shared/index';

import { HomeModule } from './home/home.module';
import { CompaniesModule } from './companies/companies.module';
import { ProjectsModule } from './projects/projects.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SharedModule } from './shared/shared.module';


export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpInterceptor(backend, defaultOptions);
}

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), HomeModule,
            CompaniesModule, ProjectsModule, LoginModule, RegisterModule, SharedModule.forRoot()],
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
      useFactory: httpFactory,
      // (backend: XHRBackend, defaultOptions: RequestOptions) =>
      //       new HttpInterceptor(backend, defaultOptions),
      deps: [XHRBackend, RequestOptions]
    },




  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
