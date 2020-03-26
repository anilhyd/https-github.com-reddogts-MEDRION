import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsApplicationExtComponent } from './grants-application-ext.component';

describe('GrantsApplicationExtComponent', () => {
  let component: GrantsApplicationExtComponent;
  let fixture: ComponentFixture<GrantsApplicationExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsApplicationExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsApplicationExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
