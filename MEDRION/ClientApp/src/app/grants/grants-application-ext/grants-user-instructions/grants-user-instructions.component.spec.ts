import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsUserInstructionsComponent } from './grants-user-instructions.component';

describe('GrantsUserInstructionsComponent', () => {
  let component: GrantsUserInstructionsComponent;
  let fixture: ComponentFixture<GrantsUserInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsUserInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsUserInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
