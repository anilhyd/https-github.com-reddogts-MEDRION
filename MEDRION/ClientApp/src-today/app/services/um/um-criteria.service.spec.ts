import { TestBed } from '@angular/core/testing';

import { UmCriteriaService } from './um-criteria.service';

describe('UmCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmCriteriaService = TestBed.get(UmCriteriaService);
    expect(service).toBeTruthy();
  });
});
