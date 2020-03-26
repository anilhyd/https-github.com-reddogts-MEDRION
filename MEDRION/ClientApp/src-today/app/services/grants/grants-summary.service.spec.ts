import { TestBed } from '@angular/core/testing';

import { GrantsSummaryService } from './grants-summary.service';

describe('GrantsSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrantsSummaryService = TestBed.get(GrantsSummaryService);
    expect(service).toBeTruthy();
  });
});
