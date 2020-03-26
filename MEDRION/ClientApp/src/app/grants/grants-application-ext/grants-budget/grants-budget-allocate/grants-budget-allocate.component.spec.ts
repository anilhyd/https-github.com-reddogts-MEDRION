import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBudgetAllocateComponent } from './grants-budget-allocate.component';

describe('GrantsBudgetAllocateComponent', () => {
  let component: GrantsBudgetAllocateComponent;
  let fixture: ComponentFixture<GrantsBudgetAllocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsBudgetAllocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsBudgetAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
