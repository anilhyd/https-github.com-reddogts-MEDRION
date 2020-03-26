import { TestBed } from '@angular/core/testing';

import { IstCriteriaService } from './ist-criteria.service';

describe('IstCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IstCriteriaService = TestBed.get(IstCriteriaService);
    expect(service).toBeTruthy();
  });
});
