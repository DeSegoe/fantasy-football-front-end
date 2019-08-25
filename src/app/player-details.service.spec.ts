import { TestBed } from '@angular/core/testing';

import { PlayerDetailsService } from './player-details.service';

describe('PlayerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerDetailsService = TestBed.get(PlayerDetailsService);
    expect(service).toBeTruthy();
  });
});
