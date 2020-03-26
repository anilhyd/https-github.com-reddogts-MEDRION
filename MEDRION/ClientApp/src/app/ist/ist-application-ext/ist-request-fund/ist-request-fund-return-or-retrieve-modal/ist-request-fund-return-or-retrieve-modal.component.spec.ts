import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundReturnOrRetrieveModalComponent } from './ist-request-fund-return-or-retrieve-modal.component';

describe('IstRequestFundReturnOrRetrieveModalComponent', () => {
  let component: IstRequestFundReturnOrRetrieveModalComponent;
  let fixture: ComponentFixture<IstRequestFundReturnOrRetrieveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundReturnOrRetrieveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundReturnOrRetrieveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
