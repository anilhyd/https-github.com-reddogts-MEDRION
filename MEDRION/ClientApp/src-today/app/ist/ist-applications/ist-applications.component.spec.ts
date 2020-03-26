import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstApplicationsComponent } from './ist-applications.component';

describe('IstApplicationsComponent', () => {
  let component: IstApplicationsComponent;
  let fixture: ComponentFixture<IstApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
