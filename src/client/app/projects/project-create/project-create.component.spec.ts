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
import { ProjectViewModule } from './project-view.module';

export function main() {
  describe('ProjectView component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, ProjectViewModule],
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

            let projectViewInstance = fixture.debugElement.children[0].componentInstance;
            let projectViewDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(projectViewInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(projectViewDOMEl.querySelectorAll('li').length).toEqual(0);

            projectViewInstance.newName = 'Minko';
            projectViewInstance.addName();

            fixture.detectChanges();

            expect(projectViewDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(projectViewDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-project-view></sd-project-view>'
})
class TestComponent { }
