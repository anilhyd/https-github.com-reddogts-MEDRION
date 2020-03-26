import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationClassificationModalComponent } from './ist-patient-information-classification-modal.component';

describe('IstPatientInformationClassificationModalComponent', () => {
  let component: IstPatientInformationClassificationModalComponent;
  let fixture: ComponentFixture<IstPatientInformationClassificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationClassificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
