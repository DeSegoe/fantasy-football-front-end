import { Injectable } from '@angular/core';
import { PlayerDetailsService } from './player-details.service';
import { TeamDetails } from './team-details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: TeamDetails[];

  constructor(private playerService: PlayerDetailsService) {
    this.teams = [];
    let playerObserver = this.playerService.getPlayers();
    playerObserver.subscribe(data => {
      let teamMap: any = {};
      data.forEach(player => teamMap[player.teamSummary.name] = player.teamSummary);
      for (var key in teamMap) {
        this.teams.push(teamMap[key]);
      }
    });
  }

  getTeams(): Observable<TeamDetails[]> {
    return of(this.teams);
  }
}
