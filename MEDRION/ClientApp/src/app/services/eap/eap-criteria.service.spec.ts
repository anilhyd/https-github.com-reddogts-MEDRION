import { TestBed } from '@angular/core/testing';

import { EapCriteriaService } from './eap-criteria.service';

describe('EapCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EapCriteriaService = TestBed.get(EapCriteriaService);
    expect(service).toBeTruthy();
  });
});
