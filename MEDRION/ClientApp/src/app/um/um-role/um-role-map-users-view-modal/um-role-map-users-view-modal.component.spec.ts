import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmRoleMapUsersViewModalComponent } from './um-role-map-users-view-modal.component';

describe('UmRoleMapUsersViewModalComponent', () => {
  let component: UmRoleMapUsersViewModalComponent;
  let fixture: ComponentFixture<UmRoleMapUsersViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmRoleMapUsersViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmRoleMapUsersViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
