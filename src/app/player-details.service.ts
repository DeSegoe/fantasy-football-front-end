import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerDetails } from './player-details';
import { IPlayerDetailsService } from './iplayer-details-service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService implements IPlayerDetailsService{

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<PlayerDetails[]> {
    return this.http.get<PlayerDetails[]>('https://football.segoo-inc.com/v1/english-premier-league/players');
  }
}
