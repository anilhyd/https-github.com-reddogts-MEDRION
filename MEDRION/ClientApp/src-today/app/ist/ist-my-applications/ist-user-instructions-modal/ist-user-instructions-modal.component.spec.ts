import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstUserInstructionsModalComponent } from './ist-user-instructions-modal.component';

describe('IstUserInstructionsModalComponent', () => {
  let component: IstUserInstructionsModalComponent;
  let fixture: ComponentFixture<IstUserInstructionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstUserInstructionsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstUserInstructionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
