import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapUserInstructionsModalComponent } from './eap-user-instructions-modal.component';

describe('EapUserInstructionsModalComponent', () => {
  let component: EapUserInstructionsModalComponent;
  let fixture: ComponentFixture<EapUserInstructionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapUserInstructionsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapUserInstructionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
