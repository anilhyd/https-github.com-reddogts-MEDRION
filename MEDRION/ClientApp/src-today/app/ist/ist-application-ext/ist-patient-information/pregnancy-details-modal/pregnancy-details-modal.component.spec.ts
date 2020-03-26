import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyDetailsModalComponent } from './pregnancy-details-modal.component';

describe('PregnancyDetailsModalComponent', () => {
  let component: PregnancyDetailsModalComponent;
  let fixture: ComponentFixture<PregnancyDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnancyDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
