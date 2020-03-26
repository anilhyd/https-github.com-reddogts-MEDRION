import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstAmendmentsComponent } from './ist-amendments.component';

describe('IstAmendmentsComponent', () => {
  let component: IstAmendmentsComponent;
  let fixture: ComponentFixture<IstAmendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstAmendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstAmendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
