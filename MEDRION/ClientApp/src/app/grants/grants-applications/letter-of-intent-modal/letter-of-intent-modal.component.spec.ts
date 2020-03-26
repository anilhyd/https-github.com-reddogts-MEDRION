import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfIntentModalComponent } from './letter-of-intent-modal.component';

describe('LetterOfIntentModalComponent', () => {
  let component: LetterOfIntentModalComponent;
  let fixture: ComponentFixture<LetterOfIntentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOfIntentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOfIntentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
