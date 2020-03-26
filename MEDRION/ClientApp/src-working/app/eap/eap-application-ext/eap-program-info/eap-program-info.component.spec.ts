import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapProgramInfoComponent } from './eap-program-info.component';

describe('EapProgramInfoComponent', () => {
  let component: EapProgramInfoComponent;
  let fixture: ComponentFixture<EapProgramInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapProgramInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapProgramInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
