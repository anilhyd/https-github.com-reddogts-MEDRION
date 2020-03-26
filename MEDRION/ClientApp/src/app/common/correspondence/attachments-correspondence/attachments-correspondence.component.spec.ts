import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsCorrespondenceComponent } from './attachments-correspondence.component';

describe('AttachmentsCorrespondenceComponent', () => {
  let component: AttachmentsCorrespondenceComponent;
  let fixture: ComponentFixture<AttachmentsCorrespondenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentsCorrespondenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
