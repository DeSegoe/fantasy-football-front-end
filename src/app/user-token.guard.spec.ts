import { TestBed, async, inject } from '@angular/core/testing';

import { UserTokenGuard } from './user-token.guard';

describe('UserTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTokenGuard]
    });
  });

  it('should ...', inject([UserTokenGuard], (guard: UserTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
