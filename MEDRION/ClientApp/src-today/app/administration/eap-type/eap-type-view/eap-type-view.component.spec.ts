import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapTypeViewComponent } from './eap-type-view.component';

describe('EapTypeViewComponent', () => {
  let component: EapTypeViewComponent;
  let fixture: ComponentFixture<EapTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
