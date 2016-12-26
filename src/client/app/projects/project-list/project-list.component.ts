import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../model/projects.model';

/**
 * This class represents the lazy loaded ProjectListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.css'],
})

export class ProjectListComponent implements OnInit {

   public projects: Array<Project>;
   public errorMessage: string;
  /**
   * Creates an instance of the ProjectListComponent with the injected
   * ProjectsService.
   *
   * @param {ProjectsService} ProjectsService - The injected ProjectsService.
   */
  constructor(public projectService: ProjectsService) {}

  /**
   * Get the projects OnInit
   */
  ngOnInit() {
    this.getProjects();
  }

  /**
   * Handle the projectsService observable
   */
  getProjects() {
    this.projectService.getProjectList()
		     .subscribe(
		       projects => this.projects = projects,
		       error =>  this.errorMessage = <any>error
		       );
  }

}
