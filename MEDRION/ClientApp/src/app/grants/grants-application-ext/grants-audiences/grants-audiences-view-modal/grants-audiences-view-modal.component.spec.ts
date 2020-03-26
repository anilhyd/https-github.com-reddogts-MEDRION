import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAudiencesViewModalComponent } from './grants-audiences-view-modal.component';

describe('GrantsAudiencesViewModalComponent', () => {
  let component: GrantsAudiencesViewModalComponent;
  let fixture: ComponentFixture<GrantsAudiencesViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAudiencesViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAudiencesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
