import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsGrantInformationComponent } from './grants-grant-information.component';

describe('GrantsGrantInformationComponent', () => {
  let component: GrantsGrantInformationComponent;
  let fixture: ComponentFixture<GrantsGrantInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsGrantInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsGrantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
