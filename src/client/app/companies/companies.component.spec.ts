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
import { CompaniesModule } from './companies.module';

export function main() {
  describe('Companies component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, CompaniesModule],
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

            let companiesInstance = fixture.debugElement.children[0].componentInstance;
            let companiesDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(companiesInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(companiesDOMEl.querySelectorAll('li').length).toEqual(0);

            companiesInstance.newName = 'Minko';
            companiesInstance.addName();

            fixture.detectChanges();

            expect(companiesDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(companiesDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-companies></sd-companies>'
})
class TestComponent { }
