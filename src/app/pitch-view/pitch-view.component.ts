import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from '../player-details.service';
import { Formations } from '../formations';
import { SortAttributes, TotalPoints, TotalPointsEvent, Cost, CostChange, CostChangeEvent, SelectedBy, PPG } from '../sort-attribute';
import { FirstEleven } from '../first-eleven';
import { PlayerDetails } from '../player-details';

@Component({
  selector: 'app-pitch-view',
  templateUrl: './pitch-view.component.html',
  styleUrls: ['./pitch-view.component.css']
})
export class PitchViewComponent implements OnInit {
  private formationsList: { count: number, formations: Formations[] };
  private sortCriteriaList: { count: number, sorter: SortAttributes[] };

  private formation: Formations;
  private sortAttribute: SortAttributes;
  private firstEleven: FirstEleven;
  private positionedPlayer: PlayerDetails[][];

  constructor(private playerService: PlayerDetailsService) { }

  ngOnInit() {
    this.formationsList = { count: 0, formations: [Formations.FourFourTwo, Formations.FourThreeThree, Formations.ThreeFiveTwo, Formations.ThreeFourThree] };
    this.sortCriteriaList = {count: 0, sorter: [TotalPoints, TotalPointsEvent, Cost, CostChange, CostChangeEvent, SelectedBy, PPG]};
    this.initializePlayerGrid();

    this.playerService.getPlayers().subscribe(data => {
      this.formation = Formations.FourFourTwo;
      this.sortAttribute = TotalPoints;
      this.firstEleven = this.playerService.generateTeam(this.formation, this.sortAttribute);
      this.populateGrid();
    });
  }

  private initializePlayerGrid() {
    this.positionedPlayer = [];
    //initialize grid
    for (let i = 0; i < 5; i++) {
      this.positionedPlayer[i] = [];
      for (let j = 0; j < 5; j++) {
        this.positionedPlayer[i][j] = null;
      }
    }
  }

  private cycleThroughFormations() {
    this.formationsList.count++;
    this.formation = this.formationsList.formations[this.formationsList.count%this.formationsList.formations.length];
    this.populateGrid();
  }

  private cycleThroughSortStrategies() {
    this.sortCriteriaList.count++;
    this.sortAttribute = this.sortCriteriaList.sorter[this.sortCriteriaList.count%this.sortCriteriaList.sorter.length];
    this.populateGrid();
  }

  private populateGrid() {
    this.initializePlayerGrid();
    this.firstEleven = this.playerService.generateTeam(this.formation, this.sortAttribute);
    this.positionedPlayer[0][2] = this.firstEleven.goalKeeper;
    this.populateHelper(1, this.firstEleven.defenders);
    this.populateHelper(2, this.firstEleven.midfielders);
    this.populateHelper(3, this.firstEleven.attackers);
    console.log(this.firstEleven);
  }

  private populateHelper(row: number, players: PlayerDetails[]) {
    if (players.length == 3) {
      this.positionedPlayer[row][1] = players[0];
      this.positionedPlayer[row][2] = players[1];
      this.positionedPlayer[row][3] = players[2];
    }
    else if (players.length == 4) {
      this.positionedPlayer[row][0] = players[0];
      this.positionedPlayer[row][1] = players[1];
      this.positionedPlayer[row][3] = players[2];
      this.positionedPlayer[row][4] = players[3];
    }
    else if (players.length == 5) {
      this.positionedPlayer[row][0] = players[0];
      this.positionedPlayer[row][1] = players[1];
      this.positionedPlayer[row][2] = players[2];
      this.positionedPlayer[row][3] = players[3];
      this.positionedPlayer[row][4] = players[4];
    }
    else if (players.length == 2) {
      this.positionedPlayer[row][1] = players[0];
      this.positionedPlayer[row][3] = players[1];
    }
  }

}
