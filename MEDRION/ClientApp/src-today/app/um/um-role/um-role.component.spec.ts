import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmRoleComponent } from './um-role.component';

describe('UmRoleComponent', () => {
  let component: UmRoleComponent;
  let fixture: ComponentFixture<UmRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
