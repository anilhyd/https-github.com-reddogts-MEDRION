import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundReturnRetrivalModalComponent } from './fund-return-retrival-modal.component';

describe('FundReturnRetrivalModalComponent', () => {
  let component: FundReturnRetrivalModalComponent;
  let fixture: ComponentFixture<FundReturnRetrivalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundReturnRetrivalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundReturnRetrivalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
