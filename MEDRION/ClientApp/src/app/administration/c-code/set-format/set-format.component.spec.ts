import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFormatComponent } from './set-format.component';

describe('SetFormatComponent', () => {
  let component: SetFormatComponent;
  let fixture: ComponentFixture<SetFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
