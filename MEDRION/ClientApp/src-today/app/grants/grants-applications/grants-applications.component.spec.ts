import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsApplicationsComponent } from './grants-applications.component';

describe('GrantsApplicationsComponent', () => {
  let component: GrantsApplicationsComponent;
  let fixture: ComponentFixture<GrantsApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
