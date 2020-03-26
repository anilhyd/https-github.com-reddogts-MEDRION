import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBccComponent } from './to-bcc.component';

describe('ToBccComponent', () => {
  let component: ToBccComponent;
  let fixture: ComponentFixture<ToBccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
