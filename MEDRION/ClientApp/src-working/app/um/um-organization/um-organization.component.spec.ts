import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmOrganizationComponent } from './um-organization.component';

describe('UmOrganizationComponent', () => {
  let component: UmOrganizationComponent;
  let fixture: ComponentFixture<UmOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
