import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupsSortOrderComponent } from './lookups-sort-order.component';

describe('LookupsSortOrderComponent', () => {
  let component: LookupsSortOrderComponent;
  let fixture: ComponentFixture<LookupsSortOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupsSortOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupsSortOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
