import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationMedicalHistoryModalComponent } from './ist-patient-information-medical-history-modal.component';

describe('IstPatientInformationMedicalHistoryModalComponent', () => {
  let component: IstPatientInformationMedicalHistoryModalComponent;
  let fixture: ComponentFixture<IstPatientInformationMedicalHistoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationMedicalHistoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationMedicalHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
