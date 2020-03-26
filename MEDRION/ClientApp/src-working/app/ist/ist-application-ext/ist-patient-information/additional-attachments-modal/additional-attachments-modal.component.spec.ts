import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAttachmentsModalComponent } from './additional-attachments-modal.component';

describe('AdditionalAttachmentsModalComponent', () => {
  let component: AdditionalAttachmentsModalComponent;
  let fixture: ComponentFixture<AdditionalAttachmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalAttachmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalAttachmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
