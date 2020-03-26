import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsRegistrationsViewModalComponent } from './grants-registrations-view-modal.component';

describe('GrantsRegistrationsViewModalComponent', () => {
  let component: GrantsRegistrationsViewModalComponent;
  let fixture: ComponentFixture<GrantsRegistrationsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsRegistrationsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsRegistrationsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
