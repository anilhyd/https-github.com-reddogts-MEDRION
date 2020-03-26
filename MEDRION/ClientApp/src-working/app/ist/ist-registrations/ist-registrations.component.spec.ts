import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstRegistrationsComponent } from './ist-registrations.component';

describe('IstRegistrationsComponent', () => {
  let component: IstRegistrationsComponent;
  let fixture: ComponentFixture<IstRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
