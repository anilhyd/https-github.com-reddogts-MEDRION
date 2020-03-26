import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstApplicationExtComponent } from './ist-application-ext.component';

describe('IstApplicationExtComponent', () => {
  let component: IstApplicationExtComponent;
  let fixture: ComponentFixture<IstApplicationExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstApplicationExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstApplicationExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
