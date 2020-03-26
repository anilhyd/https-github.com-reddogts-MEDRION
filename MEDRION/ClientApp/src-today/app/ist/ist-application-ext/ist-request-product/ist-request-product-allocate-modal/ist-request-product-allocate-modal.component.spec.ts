import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestProductAllocateModalComponent } from './ist-request-product-allocate-modal.component';

describe('IstRequestProductAllocateModalComponent', () => {
  let component: IstRequestProductAllocateModalComponent;
  let fixture: ComponentFixture<IstRequestProductAllocateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestProductAllocateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestProductAllocateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
