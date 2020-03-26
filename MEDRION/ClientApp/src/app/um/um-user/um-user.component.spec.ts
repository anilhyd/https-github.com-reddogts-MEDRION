import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmUserComponent } from './um-user.component';

describe('UmUserComponent', () => {
  let component: UmUserComponent;
  let fixture: ComponentFixture<UmUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
