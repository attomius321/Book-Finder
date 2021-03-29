import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {WizardTabComponent} from './wizard-tab/wizard-tab.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterContentInit {

  @Input() activeIndex = 0;

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter();

  @Input() isEdit = false;

  @Input() fullscreen = true;

  @ContentChildren(WizardTabComponent) inputTabs: QueryList<WizardTabComponent>;

  public tabs: WizardTabComponent[];

  constructor() {
  }

  ngOnInit() {

  }

  public ngAfterContentInit(): void {
    this.tabs = this.inputTabs.toArray();

  }

  setIndex(index) {
    this.activeIndex = index;
    this.activeIndexChange.next(this.activeIndex);
  }

}
