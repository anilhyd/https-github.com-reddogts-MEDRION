import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachDocumentsModalComponent } from './attach-documents-modal.component';

describe('AttachDocumentsModalComponent', () => {
  let component: AttachDocumentsModalComponent;
  let fixture: ComponentFixture<AttachDocumentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachDocumentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachDocumentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
