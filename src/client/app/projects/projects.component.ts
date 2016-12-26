import { Component, OnInit } from '@angular/core';
import { SideBarSection } from '../shared/components/sidebar/index';
import { SIDEBAR } from './sidebar.definition';

/**
 * This class represents the lazy loaded ProjectsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  menu: Array<SideBarSection> = SIDEBAR;

  /**
   * Creates an instance of the ProjectsComponent with the injected
   */
  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {}

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
