import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstActivitiesSeminarsViewModalComponent } from './ist-activities-seminars-view-modal.component';

describe('IstActivitiesSeminarsViewModalComponent', () => {
  let component: IstActivitiesSeminarsViewModalComponent;
  let fixture: ComponentFixture<IstActivitiesSeminarsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstActivitiesSeminarsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstActivitiesSeminarsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
