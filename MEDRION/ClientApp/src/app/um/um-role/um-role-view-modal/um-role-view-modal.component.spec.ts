import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmRoleViewModalComponent } from './um-role-view-modal.component';

describe('UmRoleViewModalComponent', () => {
  let component: UmRoleViewModalComponent;
  let fixture: ComponentFixture<UmRoleViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmRoleViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmRoleViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
