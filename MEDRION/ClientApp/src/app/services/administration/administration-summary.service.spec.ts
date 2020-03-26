import { TestBed } from '@angular/core/testing';

import { AdministrationSummaryService } from './administration-summary.service';

describe('AdministrationSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrationSummaryService = TestBed.get(AdministrationSummaryService);
    expect(service).toBeTruthy();
  });
});
