import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramViewModalComponent } from './program-view-modal.component';

describe('ProgramViewModalComponent', () => {
  let component: ProgramViewModalComponent;
  let fixture: ComponentFixture<ProgramViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
