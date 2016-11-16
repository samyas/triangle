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
import { CompanyViewModule } from './company-view.module';

export function main() {
  describe('CompanyView component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, CompanyViewModule],
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

            let companyViewInstance = fixture.debugElement.children[0].componentInstance;
            let companyViewDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(companyViewInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(companyViewDOMEl.querySelectorAll('li').length).toEqual(0);

            companyViewInstance.newName = 'Minko';
            companyViewInstance.addName();

            fixture.detectChanges();

            expect(companyViewDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(companyViewDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-company-view></sd-company-view>'
})
class TestComponent { }
