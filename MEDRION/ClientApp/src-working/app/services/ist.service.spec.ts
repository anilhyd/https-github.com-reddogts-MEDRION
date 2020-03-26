import { TestBed } from '@angular/core/testing';

import { ExtService } from './ext.service';

describe('ExtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtService = TestBed.get(ExtService);
    expect(service).toBeTruthy();
  });
});
