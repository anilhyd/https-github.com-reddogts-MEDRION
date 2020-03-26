import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsDeliveryFormatComponent } from './grants-delivery-format.component';

describe('GrantsDeliveryFormatComponent', () => {
  let component: GrantsDeliveryFormatComponent;
  let fixture: ComponentFixture<GrantsDeliveryFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsDeliveryFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsDeliveryFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
