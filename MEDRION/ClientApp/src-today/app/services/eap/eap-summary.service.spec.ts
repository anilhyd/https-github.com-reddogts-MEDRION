import { TestBed } from '@angular/core/testing';

import { EapSummaryService } from './eap-summary.service';

describe('EapSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EapSummaryService = TestBed.get(EapSummaryService);
    expect(service).toBeTruthy();
  });
});
