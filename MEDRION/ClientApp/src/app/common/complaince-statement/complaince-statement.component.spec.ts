import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainceStatementComponent } from './complaince-statement.component';

describe('ComplainceStatementComponent', () => {
  let component: ComplainceStatementComponent;
  let fixture: ComponentFixture<ComplainceStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainceStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainceStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
