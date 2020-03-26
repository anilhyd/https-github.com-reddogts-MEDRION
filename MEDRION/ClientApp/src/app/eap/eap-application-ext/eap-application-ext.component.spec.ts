import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapApplicationExtComponent } from './eap-application-ext.component';

describe('EapApplicationExtComponent', () => {
  let component: EapApplicationExtComponent;
  let fixture: ComponentFixture<EapApplicationExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapApplicationExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapApplicationExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
