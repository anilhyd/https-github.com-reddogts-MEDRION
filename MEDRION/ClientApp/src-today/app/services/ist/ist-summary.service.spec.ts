import { TestBed } from '@angular/core/testing';

import { IstSummaryService } from './ist-summary.service';

describe('IstSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IstSummaryService = TestBed.get(IstSummaryService);
    expect(service).toBeTruthy();
  });
});
