import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyTeamOrganizationViewModalComponent } from './ist-study-team-organization-view-modal.component';

describe('IstStudyTeamOrganizationViewModalComponent', () => {
  let component: IstStudyTeamOrganizationViewModalComponent;
  let fixture: ComponentFixture<IstStudyTeamOrganizationViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyTeamOrganizationViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyTeamOrganizationViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
