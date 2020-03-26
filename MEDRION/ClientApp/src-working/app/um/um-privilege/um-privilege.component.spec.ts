import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmPrivilegeComponent } from './um-privilege.component';

describe('UmPrivilegeComponent', () => {
  let component: UmPrivilegeComponent;
  let fixture: ComponentFixture<UmPrivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmPrivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
