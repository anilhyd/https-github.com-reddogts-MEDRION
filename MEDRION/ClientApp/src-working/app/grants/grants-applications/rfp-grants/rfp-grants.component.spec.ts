import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfpGrantsComponent } from './rfp-grants.component';

describe('RfpGrantsComponent', () => {
  let component: RfpGrantsComponent;
  let fixture: ComponentFixture<RfpGrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfpGrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfpGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
