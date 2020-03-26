import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPublicationsComponent } from './ist-publications.component';

describe('IstPublicationsComponent', () => {
  let component: IstPublicationsComponent;
  let fixture: ComponentFixture<IstPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
