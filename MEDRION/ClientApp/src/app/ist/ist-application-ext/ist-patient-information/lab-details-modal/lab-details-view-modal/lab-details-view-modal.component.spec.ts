import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDetailsViewModalComponent } from './lab-details-view-modal.component';

describe('LabDetailsViewModalComponent', () => {
  let component: LabDetailsViewModalComponent;
  let fixture: ComponentFixture<LabDetailsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabDetailsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDetailsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
