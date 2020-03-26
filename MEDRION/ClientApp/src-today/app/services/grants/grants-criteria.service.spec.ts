import { TestBed } from '@angular/core/testing';

import { GrantsCriteriaService } from './grants-criteria.service';

describe('GrantsCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrantsCriteriaService = TestBed.get(GrantsCriteriaService);
    expect(service).toBeTruthy();
  });
});
