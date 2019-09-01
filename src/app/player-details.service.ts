import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerDetails } from './player-details';
import { Formations } from './formations';
import { SortAttributes } from './sort-attribute';
import { FirstEleven } from './first-eleven';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {
  private players: PlayerDetails[];

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<PlayerDetails[]> {
    if (this.players)
      return of(this.players);
    let httpObservable =
      this.http.get<PlayerDetails[]>('https://football.segoo-inc.com/v1/english-premier-league/players')
        .pipe(map(data => data.filter(item => item.teamSummary).map(item => {
          item.photo = item.photo.replace(".jpg", "")
          return item;
        })));
    httpObservable.subscribe(data => this.players = data);
    return httpObservable;
  }

  generateTeam(formation: Formations, sortAttribute: SortAttributes): FirstEleven {
    let myClonedArray: PlayerDetails[] = [];
    this.players.forEach(item => myClonedArray.push(item));

    if (sortAttribute == SortAttributes.TotalPoints) {
      myClonedArray.sort((a, b) => b.totalPoints - a.totalPoints);
    }

    if (formation == Formations.FourFourTwo) {
      let goalKeeper = myClonedArray.find(item => item.elementType == 1);
      let defenders = myClonedArray.filter(item => item.elementType == 2).slice(0, 4);
      let midfielders = myClonedArray.filter(item => item.elementType == 3).slice(0, 4);
      let attackers = myClonedArray.filter(item => item.elementType == 4).slice(0, 2);
      let firstElevent = new FirstEleven();
      firstElevent.goalKeeper = goalKeeper;
      firstElevent.midfielders = midfielders;
      firstElevent.defenders = defenders;
      firstElevent.attackers = attackers;
      return firstElevent;
    }

    return null;
  }
}
