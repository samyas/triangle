import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { NameListService } from '../shared/index';
import { CompanyListModule } from './company-list.module';

export function main() {
  describe('CompanyList component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, CompanyListModule],
        declarations: [TestComponent],
        providers: [
          NameListService,
          BaseRequestOptions,
          MockBackend,
          {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let companyListInstance = fixture.debugElement.children[0].componentInstance;
            let companyListDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(companyListInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(companyListDOMEl.querySelectorAll('li').length).toEqual(0);

            companyListInstance.newName = 'Minko';
            companyListInstance.addName();

            fixture.detectChanges();

            expect(companyListDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(companyListDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-company-list></sd-company-list>'
})
class TestComponent { }
