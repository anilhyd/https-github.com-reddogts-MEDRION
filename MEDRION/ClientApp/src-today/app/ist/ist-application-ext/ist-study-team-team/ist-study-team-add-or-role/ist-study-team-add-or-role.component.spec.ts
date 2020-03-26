import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamAddOrRoleComponent } from './ist-study-team-add-or-role.component';

describe('IstStudyTeamAddOrRoleComponent', () => {
  let component: IstStudyTeamAddOrRoleComponent;
  let fixture: ComponentFixture<IstStudyTeamAddOrRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamAddOrRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamAddOrRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
