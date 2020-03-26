import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupsModalEditComponent } from './lookups-modal-edit.component';

describe('LookupsModalEditComponent', () => {
  let component: LookupsModalEditComponent;
  let fixture: ComponentFixture<LookupsModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupsModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupsModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
