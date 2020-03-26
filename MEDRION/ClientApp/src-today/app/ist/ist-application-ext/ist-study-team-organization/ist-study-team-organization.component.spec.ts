import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamOrganizationComponent } from './ist-study-team-organization.component';

describe('IstStudyTeamOrganizationComponent', () => {
  let component: IstStudyTeamOrganizationComponent;
  let fixture: ComponentFixture<IstStudyTeamOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
