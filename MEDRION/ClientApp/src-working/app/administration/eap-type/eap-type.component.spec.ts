import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapTypeComponent } from './eap-type.component';

describe('EapTypeComponent', () => {
  let component: EapTypeComponent;
  let fixture: ComponentFixture<EapTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
