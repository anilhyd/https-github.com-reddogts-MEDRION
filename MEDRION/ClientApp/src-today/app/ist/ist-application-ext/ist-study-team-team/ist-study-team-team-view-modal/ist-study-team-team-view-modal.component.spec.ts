import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamTeamViewModalComponent } from './ist-study-team-team-view-modal.component';

describe('IstStudyTeamTeamViewModalComponent', () => {
  let component: IstStudyTeamTeamViewModalComponent;
  let fixture: ComponentFixture<IstStudyTeamTeamViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamTeamViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamTeamViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
