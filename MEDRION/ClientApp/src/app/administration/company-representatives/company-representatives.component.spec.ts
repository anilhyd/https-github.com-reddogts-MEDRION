import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativesComponent } from './company-representatives.component';

describe('CompanyRepresentativesComponent', () => {
  let component: CompanyRepresentativesComponent;
  let fixture: ComponentFixture<CompanyRepresentativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
