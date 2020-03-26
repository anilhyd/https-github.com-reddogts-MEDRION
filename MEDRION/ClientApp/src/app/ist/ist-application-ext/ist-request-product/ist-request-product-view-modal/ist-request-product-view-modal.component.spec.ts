import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestProductViewModalComponent } from './ist-request-product-view-modal.component';

describe('IstRequestProductViewModalComponent', () => {
  let component: IstRequestProductViewModalComponent;
  let fixture: ComponentFixture<IstRequestProductViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestProductViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestProductViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
