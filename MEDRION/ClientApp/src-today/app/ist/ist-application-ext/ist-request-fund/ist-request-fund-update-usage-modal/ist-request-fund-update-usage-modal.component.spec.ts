import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundUpdateUsageModalComponent } from './ist-request-fund-update-usage-modal.component';

describe('IstRequestFundUpdateUsageModalComponent', () => {
  let component: IstRequestFundUpdateUsageModalComponent;
  let fixture: ComponentFixture<IstRequestFundUpdateUsageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundUpdateUsageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundUpdateUsageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
