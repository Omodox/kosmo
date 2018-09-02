import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'game/:id', component: GameComponent},
  { path: 'developer/:id', component: DeveloperComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
