import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestsViewModalComponent } from './all-requests-view-modal.component';

describe('AllRequestsViewModalComponent', () => {
  let component: AllRequestsViewModalComponent;
  let fixture: ComponentFixture<AllRequestsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRequestsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
