import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstInstitutionalReviewBoardComponent } from './ist-institutional-review-board.component';

describe('IstInstitutionalReviewBoardComponent', () => {
  let component: IstInstitutionalReviewBoardComponent;
  let fixture: ComponentFixture<IstInstitutionalReviewBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstInstitutionalReviewBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstInstitutionalReviewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
