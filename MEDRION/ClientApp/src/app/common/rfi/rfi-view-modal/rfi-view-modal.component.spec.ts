import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiViewModalComponent } from './rfi-view-modal.component';

describe('RfiViewModalComponent', () => {
  let component: RfiViewModalComponent;
  let fixture: ComponentFixture<RfiViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfiViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
