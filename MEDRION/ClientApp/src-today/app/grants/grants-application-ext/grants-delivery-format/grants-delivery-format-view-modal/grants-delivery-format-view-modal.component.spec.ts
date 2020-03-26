import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsDeliveryFormatViewModalComponent } from './grants-delivery-format-view-modal.component';

describe('GrantsDeliveryFormatViewModalComponent', () => {
  let component: GrantsDeliveryFormatViewModalComponent;
  let fixture: ComponentFixture<GrantsDeliveryFormatViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsDeliveryFormatViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsDeliveryFormatViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
