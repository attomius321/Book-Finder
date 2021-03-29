import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTabComponent } from './wizard-tab.component';

describe('WizardTabComponent', () => {
  let component: WizardTabComponent;
  let fixture: ComponentFixture<WizardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
