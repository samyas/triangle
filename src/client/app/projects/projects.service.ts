import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Project } from './model/projects.model';

@Injectable()
export class ProjectsService {

  public static readonly PROJECT_URI = '/api/projects';

  constructor(private http: Http) { }

  getProjectList(): Observable<Array<Project>> {
    return this.http.get(ProjectsService.PROJECT_URI).map((res: Response) => res.json());
  }

  createProject(project: Project): Observable<string> {
    return this.http.post(ProjectsService.PROJECT_URI, JSON.stringify(project)).map((res: Response) => res.json());
  }

}
