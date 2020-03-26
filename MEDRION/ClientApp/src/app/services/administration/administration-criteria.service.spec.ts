import { TestBed } from '@angular/core/testing';

import { AdministrationCriteriaService } from './administration-criteria.service';

describe('AdministrationCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrationCriteriaService = TestBed.get(AdministrationCriteriaService);
    expect(service).toBeTruthy();
  });
});
