import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativesViewModalComponent } from './company-representatives-view-modal.component';

describe('CompanyRepresentativesViewModalComponent', () => {
  let component: CompanyRepresentativesViewModalComponent;
  let fixture: ComponentFixture<CompanyRepresentativesViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativesViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
