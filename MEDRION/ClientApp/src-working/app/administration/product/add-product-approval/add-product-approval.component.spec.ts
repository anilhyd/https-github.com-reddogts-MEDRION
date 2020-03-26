import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductApprovalComponent } from './add-product-approval.component';

describe('AddProductApprovalComponent', () => {
  let component: AddProductApprovalComponent;
  let fixture: ComponentFixture<AddProductApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
