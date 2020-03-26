import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEventDeliveryComponent } from './set-event-delivery.component';

describe('SetEventDeliveryComponent', () => {
  let component: SetEventDeliveryComponent;
  let fixture: ComponentFixture<SetEventDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEventDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEventDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
