

import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[wizardStep]',
})
export class WizardStepDirective implements AfterViewInit {

  @Input() visibility: boolean;

  @Input('wizardStep') wizardStep: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (!this.visibility) {
         this.hide();
    }
  }

  public hide() {
    this.el.nativeElement.style.display = 'none';
  }

  public show() {
    this.el.nativeElement.style.display = 'block';
  }

}
