import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestProductComponent } from './ist-request-product.component';

describe('IstRequestProductComponent', () => {
  let component: IstRequestProductComponent;
  let fixture: ComponentFixture<IstRequestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
