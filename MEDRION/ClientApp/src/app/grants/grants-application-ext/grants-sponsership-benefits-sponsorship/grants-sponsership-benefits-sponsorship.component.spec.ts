import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsSponsershipBenefitsSponsorshipComponent } from './grants-sponsership-benefits-sponsorship.component';

describe('GrantsSponsershipBenefitsSponsorshipComponent', () => {
  let component: GrantsSponsershipBenefitsSponsorshipComponent;
  let fixture: ComponentFixture<GrantsSponsershipBenefitsSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsSponsershipBenefitsSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsSponsershipBenefitsSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
