import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamViewComponent } from './ist-study-team-view.component';

describe('IstStudyTeamViewComponent', () => {
  let component: IstStudyTeamViewComponent;
  let fixture: ComponentFixture<IstStudyTeamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
