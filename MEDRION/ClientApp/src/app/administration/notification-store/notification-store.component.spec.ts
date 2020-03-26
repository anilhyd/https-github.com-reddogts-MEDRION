import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationStoreComponent } from './notification-store.component';

describe('NotificationStoreComponent', () => {
  let component: NotificationStoreComponent;
  let fixture: ComponentFixture<NotificationStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
