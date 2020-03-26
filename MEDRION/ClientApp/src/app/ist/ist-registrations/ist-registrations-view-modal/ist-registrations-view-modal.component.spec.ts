import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRegistrationsViewModalComponent } from './ist-registrations-view-modal.component';

describe('IstRegistrationsViewModalComponent', () => {
  let component: IstRegistrationsViewModalComponent;
  let fixture: ComponentFixture<IstRegistrationsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRegistrationsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRegistrationsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
