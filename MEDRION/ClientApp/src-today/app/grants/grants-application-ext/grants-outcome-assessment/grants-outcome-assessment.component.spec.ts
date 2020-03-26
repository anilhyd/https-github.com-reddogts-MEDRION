import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsOutcomeAssessmentComponent } from './grants-outcome-assessment.component';

describe('GrantsOutcomeAssessmentComponent', () => {
  let component: GrantsOutcomeAssessmentComponent;
  let fixture: ComponentFixture<GrantsOutcomeAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsOutcomeAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsOutcomeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
