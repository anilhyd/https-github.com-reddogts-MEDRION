import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsReconciliationComponent } from './grants-reconciliation.component';

describe('GrantsReconciliationComponent', () => {
  let component: GrantsReconciliationComponent;
  let fixture: ComponentFixture<GrantsReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
