import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationViewModalComponent } from './ist-patient-information-view-modal.component';

describe('IstPatientInformationViewModalComponent', () => {
  let component: IstPatientInformationViewModalComponent;
  let fixture: ComponentFixture<IstPatientInformationViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
