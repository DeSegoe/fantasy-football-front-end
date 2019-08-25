import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchViewComponent } from './pitch-view/pitch-view.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'list', component: PlayerListComponent },
  { path: 'pitch', component: PitchViewComponent },
  { path: '', redirectTo: '/pitch', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
