import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundBankAccountsModalComponent } from './ist-request-fund-bank-accounts-modal.component';

describe('IstRequestFundBankAccountsModalComponent', () => {
  let component: IstRequestFundBankAccountsModalComponent;
  let fixture: ComponentFixture<IstRequestFundBankAccountsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundBankAccountsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundBankAccountsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
