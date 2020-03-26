import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsViewModalComponent } from './attachments-view-modal.component';

describe('AttachmentsViewModalComponent', () => {
  let component: AttachmentsViewModalComponent;
  let fixture: ComponentFixture<AttachmentsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
