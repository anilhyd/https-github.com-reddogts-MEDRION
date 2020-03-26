import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsDocumentUploadComponent } from './grants-document-upload.component';

describe('GrantsDocumentUploadComponent', () => {
  let component: GrantsDocumentUploadComponent;
  let fixture: ComponentFixture<GrantsDocumentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsDocumentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
