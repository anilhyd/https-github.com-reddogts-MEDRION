import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmDepartmentComponent } from './um-department.component';

describe('UmDepartmentComponent', () => {
  let component: UmDepartmentComponent;
  let fixture: ComponentFixture<UmDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
