import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyConfiguratorComponent } from './policy-configurator.component';

describe('PolicyConfiguratorComponent', () => {
  let component: PolicyConfiguratorComponent;
  let fixture: ComponentFixture<PolicyConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
