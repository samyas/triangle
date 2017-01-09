
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './components/toolbar/index';
import { NavbarComponent } from './components/navbar/index';
import { SidebarComponent } from './components/sidebar/index';
import { WizardComponent, WizardStepDirective } from './components/wizard/index';
import { EditListComponent } from './index';
import { NameListService } from './name-list/index';
import { AuthGuard, AuthService, CanDeactivateGuard } from './auth/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, SidebarComponent, WizardStepDirective, WizardComponent, EditListComponent],
  exports: [ToolbarComponent, NavbarComponent, SidebarComponent, WizardStepDirective, WizardComponent, EditListComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, AuthService, AuthGuard, CanDeactivateGuard]
    };
  }
}
