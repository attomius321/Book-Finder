import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wizard-tab',
  templateUrl: './wizard-tab.component.html',
  styleUrls: ['./wizard-tab.component.scss']
})
export class WizardTabComponent{

  @Input() label: string;

  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

}
