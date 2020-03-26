import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsSponsershipBenefitsComponent } from './grants-sponsership-benefits.component';

describe('GrantsSponsershipBenefitsComponent', () => {
  let component: GrantsSponsershipBenefitsComponent;
  let fixture: ComponentFixture<GrantsSponsershipBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsSponsershipBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsSponsershipBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
