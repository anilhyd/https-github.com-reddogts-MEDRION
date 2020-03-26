import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBudgetRecordExpenditureComponent } from './grants-budget-record-expenditure.component';

describe('GrantsBudgetRecordExpenditureComponent', () => {
  let component: GrantsBudgetRecordExpenditureComponent;
  let fixture: ComponentFixture<GrantsBudgetRecordExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsBudgetRecordExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsBudgetRecordExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
