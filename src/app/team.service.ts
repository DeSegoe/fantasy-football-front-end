import { Injectable } from '@angular/core';
import { PlayerDetailsService } from './player-details.service';
import { TeamDetails } from './team-details';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: TeamDetails[];

  constructor(private playerService: PlayerDetailsService) { }

  getTeams(): Observable<TeamDetails[]> {
    if (this.teams)
      return of(this.teams);

    let playerObserver = this.playerService.getPlayers();
    return playerObserver.pipe(map(data => {
      let teamMap: any = {};

      data.forEach(player => teamMap[player.teamSummary.name] = player.teamSummary);

      this.teams = [];

      for (var key in teamMap) {
        this.teams.push(teamMap[key]);
      }

      return this.teams;
    }));
  }
}
