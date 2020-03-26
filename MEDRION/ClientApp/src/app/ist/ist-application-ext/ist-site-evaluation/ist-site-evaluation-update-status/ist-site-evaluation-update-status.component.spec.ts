import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstSiteEvaluationUpdateStatusComponent } from './ist-site-evaluation-update-status.component';

describe('IstSiteEvaluationUpdateStatusComponent', () => {
  let component: IstSiteEvaluationUpdateStatusComponent;
  let fixture: ComponentFixture<IstSiteEvaluationUpdateStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstSiteEvaluationUpdateStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstSiteEvaluationUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
