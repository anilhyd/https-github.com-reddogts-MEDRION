import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRequestProductReturnOrRetrieveModalComponent } from './ist-request-product-return-or-retrieve-modal.component';

describe('IstRequestProductReturnOrRetrieveModalComponent', () => {
  let component: IstRequestProductReturnOrRetrieveModalComponent;
  let fixture: ComponentFixture<IstRequestProductReturnOrRetrieveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRequestProductReturnOrRetrieveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRequestProductReturnOrRetrieveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
