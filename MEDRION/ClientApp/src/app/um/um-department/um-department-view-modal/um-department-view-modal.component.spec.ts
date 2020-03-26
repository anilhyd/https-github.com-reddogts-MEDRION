import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmDepartmentViewModalComponent } from './um-department-view-modal.component';

describe('UmDepartmentViewModalComponent', () => {
  let component: UmDepartmentViewModalComponent;
  let fixture: ComponentFixture<UmDepartmentViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmDepartmentViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmDepartmentViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
