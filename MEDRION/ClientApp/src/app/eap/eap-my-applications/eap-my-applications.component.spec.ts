import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapMyApplicationsComponent } from './eap-my-applications.component';

describe('EapMyApplicationsComponent', () => {
  let component: EapMyApplicationsComponent;
  let fixture: ComponentFixture<EapMyApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapMyApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapMyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
