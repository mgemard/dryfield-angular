import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayComponent }      from './play/play.component';
import { ScoresComponent }  from './scores/scores.component';

const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full' },
  { path: 'play', component: PlayComponent },
  { path: 'scores', component: ScoresComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}