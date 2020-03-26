import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestProductUpdateUsageModalComponent } from './ist-request-product-update-usage-modal.component';

describe('IstRequestProductUpdateUsageModalComponent', () => {
  let component: IstRequestProductUpdateUsageModalComponent;
  let fixture: ComponentFixture<IstRequestProductUpdateUsageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestProductUpdateUsageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestProductUpdateUsageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
