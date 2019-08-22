import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerDetails } from './player-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fantasy-football';
  players:Observable<PlayerDetails[]>;
  
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    console.log("This ran...")
    this.players = this.http.get<PlayerDetails[]>('')
  }
}
