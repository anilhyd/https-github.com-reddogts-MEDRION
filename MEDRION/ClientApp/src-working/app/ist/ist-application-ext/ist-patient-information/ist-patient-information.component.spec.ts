import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPatientInformationComponent } from './ist-patient-information.component';

describe('IstPatientInformationComponent', () => {
  let component: IstPatientInformationComponent;
  let fixture: ComponentFixture<IstPatientInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPatientInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPatientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
