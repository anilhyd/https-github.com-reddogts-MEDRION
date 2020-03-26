import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureControlsAddComponent } from './configure-controls-add.component';

describe('ConfigureControlsAddComponent', () => {
  let component: ConfigureControlsAddComponent;
  let fixture: ComponentFixture<ConfigureControlsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureControlsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureControlsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
