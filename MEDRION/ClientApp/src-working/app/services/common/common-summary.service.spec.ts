import { TestBed } from '@angular/core/testing';

import { CommonSummaryService } from './common-summary.service';

describe('CommonSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonSummaryService = TestBed.get(CommonSummaryService);
    expect(service).toBeTruthy();
  });
});
