import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAuthorizedSigneeAndPayeeComponent } from './grants-authorized-signee-and-payee.component';

describe('GrantsAuthorizedSigneeAndPayeeComponent', () => {
  let component: GrantsAuthorizedSigneeAndPayeeComponent;
  let fixture: ComponentFixture<GrantsAuthorizedSigneeAndPayeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAuthorizedSigneeAndPayeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAuthorizedSigneeAndPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
