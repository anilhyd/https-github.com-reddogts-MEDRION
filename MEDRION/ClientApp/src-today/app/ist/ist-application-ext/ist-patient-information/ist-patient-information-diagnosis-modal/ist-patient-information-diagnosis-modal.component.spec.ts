import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationDiagnosisModalComponent } from './ist-patient-information-diagnosis-modal.component';

describe('IstPatientInformationDiagnosisModalComponent', () => {
  let component: IstPatientInformationDiagnosisModalComponent;
  let fixture: ComponentFixture<IstPatientInformationDiagnosisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationDiagnosisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationDiagnosisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
