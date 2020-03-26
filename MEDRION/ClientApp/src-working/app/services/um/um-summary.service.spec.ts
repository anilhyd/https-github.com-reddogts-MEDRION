import { TestBed } from '@angular/core/testing';

import { UmSummaryService } from './um-summary.service';

describe('UmSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmSummaryService = TestBed.get(UmSummaryService);
    expect(service).toBeTruthy();
  });
});
