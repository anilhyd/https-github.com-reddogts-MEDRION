import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsGeneralInformationSponsorshipComponent } from './grants-general-information-sponsorship.component';

describe('GrantsGeneralInformationSponsorshipComponent', () => {
  let component: GrantsGeneralInformationSponsorshipComponent;
  let fixture: ComponentFixture<GrantsGeneralInformationSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsGeneralInformationSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsGeneralInformationSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
