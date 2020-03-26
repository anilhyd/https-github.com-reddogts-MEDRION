import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstActivitiesSeminarsComponent } from './ist-activities-seminars.component';

describe('IstActivitiesSeminarsComponent', () => {
  let component: IstActivitiesSeminarsComponent;
  let fixture: ComponentFixture<IstActivitiesSeminarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstActivitiesSeminarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstActivitiesSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
