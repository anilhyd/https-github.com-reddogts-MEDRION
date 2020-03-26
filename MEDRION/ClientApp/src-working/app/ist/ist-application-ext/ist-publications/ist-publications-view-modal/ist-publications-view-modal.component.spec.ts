import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstPublicationsViewModalComponent } from './ist-publications-view-modal.component';

describe('IstPublicationsViewModalComponent', () => {
  let component: IstPublicationsViewModalComponent;
  let fixture: ComponentFixture<IstPublicationsViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstPublicationsViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstPublicationsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
