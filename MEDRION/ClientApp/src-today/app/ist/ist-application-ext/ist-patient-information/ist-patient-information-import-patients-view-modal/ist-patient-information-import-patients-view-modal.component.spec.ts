import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationImportPatientsViewModalComponent } from './ist-patient-information-import-patients-view-modal.component';

describe('IstPatientInformationImportPatientsViewModalComponent', () => {
  let component: IstPatientInformationImportPatientsViewModalComponent;
  let fixture: ComponentFixture<IstPatientInformationImportPatientsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationImportPatientsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationImportPatientsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
