import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlSsoConfigurationComponent } from './saml-sso-configuration.component';

describe('SamlSsoConfigurationComponent', () => {
  let component: SamlSsoConfigurationComponent;
  let fixture: ComponentFixture<SamlSsoConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlSsoConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlSsoConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
