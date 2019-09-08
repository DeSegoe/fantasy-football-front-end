import { TestBed, async, inject } from '@angular/core/testing';

import { AlreadyAuthenticatedGuard } from './already-authenticated.guard';

describe('AlreadyAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyAuthenticatedGuard]
    });
  });

  it('should ...', inject([AlreadyAuthenticatedGuard], (guard: AlreadyAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
