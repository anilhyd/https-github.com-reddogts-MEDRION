import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstAmendmentsViewModalComponent } from './ist-amendments-view-modal.component';

describe('IstAmendmentsViewModalComponent', () => {
  let component: IstAmendmentsViewModalComponent;
  let fixture: ComponentFixture<IstAmendmentsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstAmendmentsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstAmendmentsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
