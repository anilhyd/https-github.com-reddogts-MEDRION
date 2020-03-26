import { TestBed } from '@angular/core/testing';

import { AppFunctionsService } from './app-functions.service';

describe('AppFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFunctionsService = TestBed.get(AppFunctionsService);
    expect(service).toBeTruthy();
  });
});
