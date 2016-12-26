import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../model/projects.model';


/**
 * 
 * 
 * @export
 * @class ProjectViewComponent
 * @implements {OnInit}
 */
@Component({
  moduleId: module.id,
  selector: 'sd-project-view',
  templateUrl: 'project-view.component.html',
  styleUrls: ['project-view.component.css'],
})

export class ProjectViewComponent implements OnInit {

   /**
    * 
    * 
    * @type {Array<Project>}
    * @memberOf ProjectViewComponent
    */
   public projects: Array<Project>;
   /**
    * 
    * 
    * @type {string}
    * @memberOf ProjectViewComponent
    */
   public errorMessage: string;

  /**
   * Creates an instance of ProjectViewComponent.
   * 
   * @param {ProjectsService} projectService
   * 
   * @memberOf ProjectViewComponent
   */
  constructor(public projectService: ProjectsService) {}


  /**
   * 
   * 
   * 
   * @memberOf ProjectViewComponent
   */
  ngOnInit() {
    this.getProjects();
  }

  /**
   * 
   * 
   * 
   * @memberOf ProjectViewComponent
   */
  getProjects() {
    this.projectService.getProjectList()
		     .subscribe(
		       projects => this.projects = projects,
		       error =>  this.errorMessage = <any>error
		       );
  }
}
