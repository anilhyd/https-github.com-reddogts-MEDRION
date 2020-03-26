import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheraupeticAreaComponent } from './theraupetic-area.component';

describe('TheraupeticAreaComponent', () => {
  let component: TheraupeticAreaComponent;
  let fixture: ComponentFixture<TheraupeticAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheraupeticAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheraupeticAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
