import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAccredationDetailsComponent } from './grants-accredation-details.component';

describe('GrantsAccredationDetailsComponent', () => {
  let component: GrantsAccredationDetailsComponent;
  let fixture: ComponentFixture<GrantsAccredationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAccredationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAccredationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
