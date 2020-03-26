import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsGeneralInformationCharitableComponent } from './grants-general-information-charitable.component';

describe('GrantsGeneralInformationCharitableComponent', () => {
  let component: GrantsGeneralInformationCharitableComponent;
  let fixture: ComponentFixture<GrantsGeneralInformationCharitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsGeneralInformationCharitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsGeneralInformationCharitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
