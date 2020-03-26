import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsRegistrationsComplianceComponent } from './grants-registrations-compliance.component';

describe('GrantsRegistrationsComplianceComponent', () => {
  let component: GrantsRegistrationsComplianceComponent;
  let fixture: ComponentFixture<GrantsRegistrationsComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsRegistrationsComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsRegistrationsComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
