import { Component, OnInit } from '@angular/core';
import { IPlayerDetailsService } from '../iplayer-details-service';
import { Observable } from 'rxjs';
import { PlayerDetails } from '../player-details';
import { PlayerDetailsService } from '../player-details.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Observable<PlayerDetails[]>;

  constructor(private playerService: PlayerDetailsService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
