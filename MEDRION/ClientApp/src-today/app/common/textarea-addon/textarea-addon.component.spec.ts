import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAddonComponent } from './textarea-addon.component';

describe('TextareaAddonComponent', () => {
  let component: TextareaAddonComponent;
  let fixture: ComponentFixture<TextareaAddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaAddonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
