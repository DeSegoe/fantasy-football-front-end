import { Component, OnInit, Input } from '@angular/core';
import { PlayerDetails } from '../player-details';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input()
  private player: PlayerDetails;
  constructor() { }
  ngOnInit() {
  }

  getPicture(): string {
    return 'https://segoo-inc-fantasy-football.s3.us-east-2.amazonaws.com/images/'+this.player.photo;
  }

}
