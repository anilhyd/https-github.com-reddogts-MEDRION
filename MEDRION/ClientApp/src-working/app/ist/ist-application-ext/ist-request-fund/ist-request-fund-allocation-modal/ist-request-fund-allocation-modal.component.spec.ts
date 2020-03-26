import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundAllocationModalComponent } from './ist-request-fund-allocation-modal.component';

describe('IstRequestFundAllocationModalComponent', () => {
  let component: IstRequestFundAllocationModalComponent;
  let fixture: ComponentFixture<IstRequestFundAllocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundAllocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundAllocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
