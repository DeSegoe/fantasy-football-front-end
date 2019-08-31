import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from '../player-details.service';

@Component({
  selector: 'app-pitch-view',
  templateUrl: './pitch-view.component.html',
  styleUrls: ['./pitch-view.component.css']
})
export class PitchViewComponent implements OnInit {

  constructor(private playerService: PlayerDetailsService) { }

  ngOnInit() {
  }

}
