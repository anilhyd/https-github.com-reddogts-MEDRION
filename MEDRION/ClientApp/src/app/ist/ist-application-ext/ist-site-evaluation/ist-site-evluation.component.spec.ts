import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstSiteEvluationComponent } from './ist-site-evluation.component';

describe('IstSiteEvluationComponent', () => {
  let component: IstSiteEvluationComponent;
  let fixture: ComponentFixture<IstSiteEvluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstSiteEvluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstSiteEvluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
