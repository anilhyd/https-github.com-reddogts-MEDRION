import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamTeamComponent } from './ist-study-team-team.component';

describe('IstStudyTeamTeamComponent', () => {
  let component: IstStudyTeamTeamComponent;
  let fixture: ComponentFixture<IstStudyTeamTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
