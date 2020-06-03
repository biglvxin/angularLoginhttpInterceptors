import { TestBed } from '@angular/core/testing';

import { EvironmentService } from './evironment.service';

describe('EvironmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvironmentService = TestBed.get(EvironmentService);
    expect(service).toBeTruthy();
  });
});
