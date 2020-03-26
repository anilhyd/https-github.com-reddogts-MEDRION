import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstConceptProposalComponent } from './ist-concept-proposal.component';

describe('IstConceptProposalComponent', () => {
  let component: IstConceptProposalComponent;
  let fixture: ComponentFixture<IstConceptProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstConceptProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstConceptProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
