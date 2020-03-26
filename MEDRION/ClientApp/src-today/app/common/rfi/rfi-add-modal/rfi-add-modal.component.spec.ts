import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiAddModalComponent } from './rfi-add-modal.component';

describe('RfiAddModalComponent', () => {
  let component: RfiAddModalComponent;
  let fixture: ComponentFixture<RfiAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfiAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
