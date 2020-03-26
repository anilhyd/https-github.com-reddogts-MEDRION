import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentClassificationComponent } from './attachment-classification.component';

describe('AttachmentClassificationComponent', () => {
  let component: AttachmentClassificationComponent;
  let fixture: ComponentFixture<AttachmentClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
