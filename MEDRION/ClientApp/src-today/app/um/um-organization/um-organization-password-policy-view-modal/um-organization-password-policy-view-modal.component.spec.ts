import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmOrganizationPasswordPolicyViewModalComponent } from './um-organization-password-policy-view-modal.component';

describe('UmOrganizationPasswordPolicyViewModalComponent', () => {
  let component: UmOrganizationPasswordPolicyViewModalComponent;
  let fixture: ComponentFixture<UmOrganizationPasswordPolicyViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmOrganizationPasswordPolicyViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmOrganizationPasswordPolicyViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
