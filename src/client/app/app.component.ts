import { Component } from '@angular/core';
import { Config, NavBarItem} from './shared/index';
import { MENU} from './shared/menu/menu.definition';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  menu: Array<NavBarItem> = MENU;

  constructor() {
    console.log('Environment config', Config);
  }
}
