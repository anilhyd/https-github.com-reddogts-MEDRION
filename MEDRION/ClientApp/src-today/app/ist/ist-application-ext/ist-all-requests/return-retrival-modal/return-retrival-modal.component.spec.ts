import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRetrivalModalComponent } from './return-retrival-modal.component';

describe('ReturnRetrivalModalComponent', () => {
  let component: ReturnRetrivalModalComponent;
  let fixture: ComponentFixture<ReturnRetrivalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnRetrivalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRetrivalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
