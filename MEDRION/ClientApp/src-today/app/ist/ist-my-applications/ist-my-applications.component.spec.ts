import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstMyApplicationsComponent } from './ist-my-applications.component';

describe('IstMyApplicationsComponent', () => {
  let component: IstMyApplicationsComponent;
  let fixture: ComponentFixture<IstMyApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstMyApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstMyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
