import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAudiencesComponent } from './grants-audiences.component';

describe('GrantsAudiencesComponent', () => {
  let component: GrantsAudiencesComponent;
  let fixture: ComponentFixture<GrantsAudiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsAudiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsAudiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
