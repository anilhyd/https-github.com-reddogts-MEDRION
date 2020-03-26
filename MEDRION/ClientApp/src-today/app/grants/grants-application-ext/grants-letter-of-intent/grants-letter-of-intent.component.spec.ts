import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsLetterOfIntentComponent } from './grants-letter-of-intent.component';

describe('GrantsLetterOfIntentComponent', () => {
  let component: GrantsLetterOfIntentComponent;
  let fixture: ComponentFixture<GrantsLetterOfIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsLetterOfIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsLetterOfIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
