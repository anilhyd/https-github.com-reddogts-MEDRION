import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmOrganizationViewModalComponent } from './um-organization-view-modal.component';

describe('UmOrganizationViewModalComponent', () => {
  let component: UmOrganizationViewModalComponent;
  let fixture: ComponentFixture<UmOrganizationViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmOrganizationViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmOrganizationViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
