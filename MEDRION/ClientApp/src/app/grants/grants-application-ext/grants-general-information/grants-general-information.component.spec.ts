import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsGeneralInformationComponent } from './grants-general-information.component';

describe('GrantsGeneralInformationComponent', () => {
  let component: GrantsGeneralInformationComponent;
  let fixture: ComponentFixture<GrantsGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
