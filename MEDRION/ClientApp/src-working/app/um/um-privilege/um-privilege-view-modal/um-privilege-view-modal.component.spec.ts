import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmPrivilegeViewModalComponent } from './um-privilege-view-modal.component';

describe('UmPrivilegeViewModalComponent', () => {
  let component: UmPrivilegeViewModalComponent;
  let fixture: ComponentFixture<UmPrivilegeViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmPrivilegeViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmPrivilegeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
