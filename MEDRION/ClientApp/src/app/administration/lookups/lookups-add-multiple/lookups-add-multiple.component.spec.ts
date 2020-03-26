import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupsAddMultipleComponent } from './lookups-add-multiple.component';

describe('LookupsAddMultipleComponent', () => {
  let component: LookupsAddMultipleComponent;
  let fixture: ComponentFixture<LookupsAddMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupsAddMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupsAddMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
