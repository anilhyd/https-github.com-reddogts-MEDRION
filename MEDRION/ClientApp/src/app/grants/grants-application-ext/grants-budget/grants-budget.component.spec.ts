import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBudgetComponent } from './grants-budget.component';

describe('GrantsBudgetComponent', () => {
  let component: GrantsBudgetComponent;
  let fixture: ComponentFixture<GrantsBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
