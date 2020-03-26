import { TestBed } from '@angular/core/testing';

import { CommonCriteriaService } from './common-criteria.service';

describe('CommonCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonCriteriaService = TestBed.get(CommonCriteriaService);
    expect(service).toBeTruthy();
  });
});
