import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmUserMapUserViewModalComponent } from './um-user-map-user-view-modal.component';

describe('UmUserMapUserViewModalComponent', () => {
  let component: UmUserMapUserViewModalComponent;
  let fixture: ComponentFixture<UmUserMapUserViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmUserMapUserViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmUserMapUserViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
