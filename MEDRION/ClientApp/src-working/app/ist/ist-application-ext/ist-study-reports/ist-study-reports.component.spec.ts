import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyReportsComponent } from './ist-study-reports.component';

describe('IstStudyReportsComponent', () => {
  let component: IstStudyReportsComponent;
  let fixture: ComponentFixture<IstStudyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
