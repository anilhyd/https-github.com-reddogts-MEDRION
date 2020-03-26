import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryViewModalComponent } from './medical-history-view-modal.component';

describe('MedicalHistoryViewModalComponent', () => {
  let component: MedicalHistoryViewModalComponent;
  let fixture: ComponentFixture<MedicalHistoryViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
