import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapComponent } from './eap.component';

describe('EapComponent', () => {
  let component: EapComponent;
  let fixture: ComponentFixture<EapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
