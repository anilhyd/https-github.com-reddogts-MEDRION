import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureControlsModalComponent } from './configure-controls-modal.component';

describe('ConfigureControlsModalComponent', () => {
  let component: ConfigureControlsModalComponent;
  let fixture: ComponentFixture<ConfigureControlsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureControlsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureControlsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
