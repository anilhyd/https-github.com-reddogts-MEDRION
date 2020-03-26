import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesViewModalComponent } from './notes-view-modal.component';

describe('NotesViewModalComponent', () => {
  let component: NotesViewModalComponent;
  let fixture: ComponentFixture<NotesViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
