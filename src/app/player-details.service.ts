import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/observable/of';
import { PlayerDetails } from './player-details';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {
  private players: PlayerDetails[];

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<PlayerDetails[]> {
    if (this.players) 
      return of(this.players);
    let httpObservable = this.http.get<PlayerDetails[]>('https://football.segoo-inc.com/v1/english-premier-league/players');
    httpObservable.subscribe(data=>this.players = data);
    return httpObservable;
  }
}
