import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRepositoryModalComponent } from './screen-repository-modal.component';

describe('ScreenRepositoryModalComponent', () => {
  let component: ScreenRepositoryModalComponent;
  let fixture: ComponentFixture<ScreenRepositoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenRepositoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRepositoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
