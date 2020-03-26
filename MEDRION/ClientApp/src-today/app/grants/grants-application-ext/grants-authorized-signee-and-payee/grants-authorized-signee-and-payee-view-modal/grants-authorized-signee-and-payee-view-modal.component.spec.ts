import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAuthorizedSigneeAndPayeeViewModalComponent } from './grants-authorized-signee-and-payee-view-modal.component';

describe('GrantsAuthorizedSigneeAndPayeeViewModalComponent', () => {
  let component: GrantsAuthorizedSigneeAndPayeeViewModalComponent;
  let fixture: ComponentFixture<GrantsAuthorizedSigneeAndPayeeViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAuthorizedSigneeAndPayeeViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAuthorizedSigneeAndPayeeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
