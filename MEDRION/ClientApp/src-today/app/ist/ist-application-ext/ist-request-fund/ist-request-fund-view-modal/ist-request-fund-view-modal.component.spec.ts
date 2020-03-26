import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundViewModalComponent } from './ist-request-fund-view-modal.component';

describe('IstRequestFundViewModalComponent', () => {
  let component: IstRequestFundViewModalComponent;
  let fixture: ComponentFixture<IstRequestFundViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
