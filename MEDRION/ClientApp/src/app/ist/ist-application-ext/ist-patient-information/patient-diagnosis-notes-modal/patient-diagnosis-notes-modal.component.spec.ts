import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiagnosisNotesModalComponent } from './patient-diagnosis-notes-modal.component';

describe('PatientDiagnosisNotesModalComponent', () => {
  let component: PatientDiagnosisNotesModalComponent;
  let fixture: ComponentFixture<PatientDiagnosisNotesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDiagnosisNotesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnosisNotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
