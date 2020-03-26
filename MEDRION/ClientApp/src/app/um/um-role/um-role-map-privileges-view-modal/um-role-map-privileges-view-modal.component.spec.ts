import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmRoleMapPrivilegesViewModalComponent } from './um-role-map-privileges-view-modal.component';

describe('UmRoleMapPrivilegesViewModalComponent', () => {
  let component: UmRoleMapPrivilegesViewModalComponent;
  let fixture: ComponentFixture<UmRoleMapPrivilegesViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmRoleMapPrivilegesViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmRoleMapPrivilegesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
