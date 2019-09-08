import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchViewComponent } from './pitch-view/pitch-view.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserTokenGuard } from './user-token.guard';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { AlreadyAuthenticatedGuard } from './already-authenticated.guard';


const routes: Routes = [
  { path: 'list', component: PlayerListComponent, canActivate: [UserTokenGuard] },
  { path: 'pitch', component: PitchViewComponent, canActivate: [UserTokenGuard] },
  { path: 'login', component: FacebookLoginComponent, canActivate: [AlreadyAuthenticatedGuard]},
  { path: '', redirectTo: '/pitch', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
