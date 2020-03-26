import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsMyApplicationsComponent } from './grants-my-applications.component';

describe('GrantsMyApplicationsComponent', () => {
  let component: GrantsMyApplicationsComponent;
  let fixture: ComponentFixture<GrantsMyApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsMyApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsMyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
