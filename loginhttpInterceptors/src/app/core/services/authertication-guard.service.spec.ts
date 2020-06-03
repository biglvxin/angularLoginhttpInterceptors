import { TestBed } from '@angular/core/testing';

import { AutherticationGuardService } from './authertication-guard.service';

describe('AutherticationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutherticationGuardService = TestBed.get(AutherticationGuardService);
    expect(service).toBeTruthy();
  });
});
