import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheraupeticAreaViewModalComponent } from './theraupetic-area-view-modal.component';

describe('TheraupeticAreaViewModalComponent', () => {
  let component: TheraupeticAreaViewModalComponent;
  let fixture: ComponentFixture<TheraupeticAreaViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheraupeticAreaViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheraupeticAreaViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
