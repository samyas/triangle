import { Component, AfterViewInit, ContentChildren, QueryList, } from '@angular/core';
import { WizardStepDirective } from './wizard-step.directive';

@Component({
  moduleId: module.id,
  selector: 'ng-wizard',
  styleUrls: [
		    'wizard.component.css'
  ],
  templateUrl: 'wizard.component.html'
})
export class WizardComponent implements AfterViewInit {

    private activeStep: string;

    @ContentChildren(WizardStepDirective) private wizardSteps: QueryList<WizardStepDirective>;

      ngAfterViewInit() {
        if (this.wizardSteps.length === 0) {
            //this.errorMessage('WizardComponent not found view childrens');
        }

        //this.setPanel(this.getRealIndex(this.defaults.currentTab));
    }

    showStep(stepId: string) {
        if (this.wizardSteps.length > 0) {
            this.wizardSteps.forEach(stepElement => {
                if (stepElement.wizardStep == stepId) {
                    stepElement.show();
                }else {
                     stepElement.hide();
                }
            });
        }
    }

    nextStep(stepId: string) {}

}