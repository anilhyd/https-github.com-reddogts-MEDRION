import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstComponent } from './ist.component';

describe('IstComponent', () => {
  let component: IstComponent;
  let fixture: ComponentFixture<IstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
