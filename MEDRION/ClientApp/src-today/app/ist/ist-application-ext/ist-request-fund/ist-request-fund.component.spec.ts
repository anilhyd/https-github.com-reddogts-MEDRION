import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestFundComponent } from './ist-request-fund.component';

describe('IstRequestFundComponent', () => {
  let component: IstRequestFundComponent;
  let fixture: ComponentFixture<IstRequestFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
