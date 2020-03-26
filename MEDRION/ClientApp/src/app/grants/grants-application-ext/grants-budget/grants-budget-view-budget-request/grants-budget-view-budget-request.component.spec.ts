import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBudgetViewBudgetRequestComponent } from './grants-budget-view-budget-request.component';

describe('GrantsBudgetViewBudgetRequestComponent', () => {
  let component: GrantsBudgetViewBudgetRequestComponent;
  let fixture: ComponentFixture<GrantsBudgetViewBudgetRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsBudgetViewBudgetRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsBudgetViewBudgetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
