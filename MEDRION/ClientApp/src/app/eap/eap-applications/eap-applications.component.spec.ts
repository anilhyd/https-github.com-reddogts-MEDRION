import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapApplicationsComponent } from './eap-applications.component';

describe('EapApplicationsComponent', () => {
  let component: EapApplicationsComponent;
  let fixture: ComponentFixture<EapApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
