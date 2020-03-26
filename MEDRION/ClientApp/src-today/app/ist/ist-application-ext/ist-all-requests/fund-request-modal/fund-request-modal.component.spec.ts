import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestModalComponent } from './fund-request-modal.component';

describe('FundRequestModalComponent', () => {
  let component: FundRequestModalComponent;
  let fixture: ComponentFixture<FundRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
