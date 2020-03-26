import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachDocumentTypesComponent } from './attach-document-types.component';

describe('AttachDocumentTypesComponent', () => {
  let component: AttachDocumentTypesComponent;
  let fixture: ComponentFixture<AttachDocumentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachDocumentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachDocumentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
