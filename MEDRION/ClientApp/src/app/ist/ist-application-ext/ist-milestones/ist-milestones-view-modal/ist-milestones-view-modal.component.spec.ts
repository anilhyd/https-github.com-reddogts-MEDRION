import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstMilestonesViewModalComponent } from './ist-milestones-view-modal.component';

describe('IstMilestonesViewModalComponent', () => {
  let component: IstMilestonesViewModalComponent;
  let fixture: ComponentFixture<IstMilestonesViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstMilestonesViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstMilestonesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
