import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsRegistrationsComponent } from './grants-registrations.component';

describe('GrantsRegistrationsComponent', () => {
  let component: GrantsRegistrationsComponent;
  let fixture: ComponentFixture<GrantsRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
