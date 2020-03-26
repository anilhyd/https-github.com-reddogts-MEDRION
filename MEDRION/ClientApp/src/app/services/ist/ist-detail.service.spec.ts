import { TestBed } from '@angular/core/testing';

import { IstDetailService } from './ist-detail.service';

describe('IstDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IstDetailService = TestBed.get(IstDetailService);
    expect(service).toBeTruthy();
  });
});
