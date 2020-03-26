import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsDocumentUploadSponsorshipComponent } from './grants-document-upload-sponsorship.component';

describe('GrantsDocumentUploadSponsorshipComponent', () => {
  let component: GrantsDocumentUploadSponsorshipComponent;
  let fixture: ComponentFixture<GrantsDocumentUploadSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsDocumentUploadSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsDocumentUploadSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
