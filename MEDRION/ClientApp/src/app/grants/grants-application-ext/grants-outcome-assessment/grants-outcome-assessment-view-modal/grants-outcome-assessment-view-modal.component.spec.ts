import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsOutcomeAssessmentViewModalComponent } from './grants-outcome-assessment-view-modal.component';

describe('GrantsOutcomeAssessmentViewModalComponent', () => {
  let component: GrantsOutcomeAssessmentViewModalComponent;
  let fixture: ComponentFixture<GrantsOutcomeAssessmentViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsOutcomeAssessmentViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsOutcomeAssessmentViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
