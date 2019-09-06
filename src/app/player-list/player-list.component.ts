import { Component, OnInit } from '@angular/core';
import { PlayerDetails } from '../player-details';
import { PlayerDetailsService } from '../player-details.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  private players: PlayerDetails[];

  constructor(private playerService: PlayerDetailsService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => this.players = data);
  }

  sortData(sort: Sort) {
    const data = this.players.slice();
    if (!sort.active || sort.direction === '') {
      this.players = data;
      return;
    }

    this.players = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.secondName, b.secondName, isAsc);
        case 'team': return compare(a.teamSummary.name, b.teamSummary.name, isAsc);
        case 'ppg': return compare(a.pointsPerGame, b.pointsPerGame, isAsc);
        case 'points': return compare(a.totalPoints, b.totalPoints, isAsc);
        case 'eventPoints': return compare(a.eventPoints, b.eventPoints, isAsc);
        case 'cost': return compare(a.nowCost, b.nowCost, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

