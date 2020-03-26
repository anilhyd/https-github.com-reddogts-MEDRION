import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyConfiguratorModalComponent } from './policy-configurator-modal.component';

describe('PolicyConfiguratorModalComponent', () => {
  let component: PolicyConfiguratorModalComponent;
  let fixture: ComponentFixture<PolicyConfiguratorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyConfiguratorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyConfiguratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
