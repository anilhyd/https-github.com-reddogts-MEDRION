import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfpModalComponent } from './rfp-modal.component';

describe('RfpModalComponent', () => {
  let component: RfpModalComponent;
  let fixture: ComponentFixture<RfpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
