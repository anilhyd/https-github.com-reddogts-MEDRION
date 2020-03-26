import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstGeneralInformationComponent } from './ist-general-information.component';

describe('IstGeneralInformationComponent', () => {
  let component: IstGeneralInformationComponent;
  let fixture: ComponentFixture<IstGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
