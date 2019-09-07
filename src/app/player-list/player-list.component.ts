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
        case 'selectedBy': return compare(parseFloat(a.selectedByPercent), parseFloat(b.selectedByPercent), isAsc);
        case 'costChange': return compare(this.costChange(a), this.costChange(b), isAsc);
        case 'transferChange': return compare(this.selectionChange(a), this.selectionChange(b), isAsc);
        default: return 0;
      }
    });
  }

  costChange(player: PlayerDetails): number {
    let originalCost = player.nowCost - player.costChangeStart;
    if (originalCost > 0)
      return 100*(player.nowCost - originalCost) / originalCost;
    return 0;
  };

  selectionChange(player: PlayerDetails): number {
    if (player.transfersOut > 0)
      return player.transfersIn / player.transfersOut;
    return 0;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

