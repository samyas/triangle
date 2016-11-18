import { Component, Input, OnInit } from '@angular/core';

import { NavBarItem } from './navbar.model';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  //styleUrls: ['navbar.component.css'],
})

export class NavbarComponent  implements OnInit {

  @Input('menu') menu: Array<NavBarItem>;

   /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {}

}
