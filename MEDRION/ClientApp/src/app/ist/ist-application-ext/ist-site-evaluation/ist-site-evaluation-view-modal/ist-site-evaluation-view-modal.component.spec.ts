import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstSiteEvaluationViewModalComponent } from './ist-site-evaluation-view-modal.component';

describe('IstSiteEvaluationViewModalComponent', () => {
  let component: IstSiteEvaluationViewModalComponent;
  let fixture: ComponentFixture<IstSiteEvaluationViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstSiteEvaluationViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstSiteEvaluationViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
