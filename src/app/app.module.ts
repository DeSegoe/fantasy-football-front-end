import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PitchViewComponent } from './pitch-view/pitch-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerViewComponent,
    PitchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
