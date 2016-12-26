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
import { ProjectsModule } from './projects.module';

export function main() {
  describe('Projects component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, ProjectsModule],
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

            let projectsInstance = fixture.debugElement.children[0].componentInstance;
            let projectsDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(projectsInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(projectsDOMEl.querySelectorAll('li').length).toEqual(0);

            projectsInstance.newName = 'Minko';
            projectsInstance.addName();

            fixture.detectChanges();

            expect(projectsDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(projectsDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-projects></sd-projects>'
})
class TestComponent { }
