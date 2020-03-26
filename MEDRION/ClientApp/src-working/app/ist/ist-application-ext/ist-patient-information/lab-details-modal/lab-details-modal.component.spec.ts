import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDetailsModalComponent } from './lab-details-modal.component';

describe('LabDetailsModalComponent', () => {
  let component: LabDetailsModalComponent;
  let fixture: ComponentFixture<LabDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
