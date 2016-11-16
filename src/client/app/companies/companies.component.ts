import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { SideBarSection } from '../shared/components/sidebar/index';
import { SIDEBAR } from './sidebar.definition';

/**
 * This class represents the lazy loaded CompaniesComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-companies',
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css'],
})

export class CompaniesComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  menu: Array<SideBarSection> = SIDEBAR;

  /**
   * Creates an instance of the CompaniesComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
		     .subscribe(
		       names => this.names = names,
		       error =>  this.errorMessage = <any>error
		       );
  }

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
