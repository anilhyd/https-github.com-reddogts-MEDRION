import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeModalComponent } from './document-type-modal.component';

describe('DocumentTypeModalComponent', () => {
  let component: DocumentTypeModalComponent;
  let fixture: ComponentFixture<DocumentTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
