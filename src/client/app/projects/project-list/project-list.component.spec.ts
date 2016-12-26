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
import { ProjectListModule } from './project-list.module';

export function main() {
  describe('ProjectList component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, ProjectListModule],
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

            let projectListInstance = fixture.debugElement.children[0].componentInstance;
            let projectListDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(projectListInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(projectListDOMEl.querySelectorAll('li').length).toEqual(0);

            projectListInstance.newName = 'Minko';
            projectListInstance.addName();

            fixture.detectChanges();

            expect(projectListDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(projectListDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-project-list></sd-project-list>'
})
class TestComponent { }
