import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInstructionModalComponent } from './user-instruction-modal.component';

describe('UserInstructionModalComponent', () => {
  let component: UserInstructionModalComponent;
  let fixture: ComponentFixture<UserInstructionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInstructionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
