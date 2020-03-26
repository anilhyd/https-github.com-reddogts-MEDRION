import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstMilestonesComponent } from './ist-milestones.component';

describe('IstMilestonesComponent', () => {
  let component: IstMilestonesComponent;
  let fixture: ComponentFixture<IstMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
