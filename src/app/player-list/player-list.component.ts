import { Component, OnInit} from '@angular/core';
import { PlayerDetails } from '../player-details';
import { PlayerDetailsService } from '../player-details.service';

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
}

