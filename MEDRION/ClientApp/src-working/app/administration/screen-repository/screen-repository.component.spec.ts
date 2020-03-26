import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRepositoryComponent } from './screen-repository.component';

describe('ScreenRepositoryComponent', () => {
  let component: ScreenRepositoryComponent;
  let fixture: ComponentFixture<ScreenRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
