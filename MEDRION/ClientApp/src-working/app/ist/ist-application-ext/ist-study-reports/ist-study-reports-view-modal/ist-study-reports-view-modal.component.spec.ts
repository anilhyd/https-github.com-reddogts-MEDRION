import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstStudyReportsViewModalComponent } from './ist-study-reports-view-modal.component';

describe('IstStudyReportsViewModalComponent', () => {
  let component: IstStudyReportsViewModalComponent;
  let fixture: ComponentFixture<IstStudyReportsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstStudyReportsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstStudyReportsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
