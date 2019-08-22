import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerDetails } from './player-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http:HttpClient) { }

  public getPlayers():Observable<PlayerDetails[]> {
    return this.http.get<PlayerDetails[]>('https://x2crdejof6.execute-api.us-east-2.amazonaws.com/DEV/english-premier-league/players');
  } 
}
