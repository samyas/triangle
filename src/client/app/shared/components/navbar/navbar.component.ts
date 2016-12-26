import { Component, Input, trigger, state, animate, transition, style,  OnInit } from '@angular/core';

import { NavBarItem } from './navbar.model';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
   animations: [
      trigger('visibilityChanged', [
        state('shown' , style({ display: 'block' })),
        state('hidden', style({ display: 'none' })),
        transition('* => *', animate('.5s'))
      ])
  ],
  templateUrl: 'navbar.component.html',
  //styleUrls: ['navbar.component.css'],
})

export class NavbarComponent  implements OnInit {

  @Input('menu') menu: Array<NavBarItem>;
  visibility = 'shown';
  isVisible : boolean = true;

   /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {}


  showMenu() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {}

}
