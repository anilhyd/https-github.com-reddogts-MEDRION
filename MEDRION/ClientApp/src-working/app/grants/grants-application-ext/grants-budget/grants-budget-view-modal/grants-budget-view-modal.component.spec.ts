import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBudgetViewModalComponent } from './grants-budget-view-modal.component';

describe('GrantsBudgetViewModalComponent', () => {
  let component: GrantsBudgetViewModalComponent;
  let fixture: ComponentFixture<GrantsBudgetViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsBudgetViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsBudgetViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
