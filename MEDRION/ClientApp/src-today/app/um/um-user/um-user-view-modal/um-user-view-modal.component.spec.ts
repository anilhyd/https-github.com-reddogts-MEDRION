import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmUserViewModalComponent } from './um-user-view-modal.component';

describe('UmUserViewModalComponent', () => {
  let component: UmUserViewModalComponent;
  let fixture: ComponentFixture<UmUserViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmUserViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmUserViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
