import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { GamePage } from './game/game.page';
import { TeamsPage } from './teams/teams.page';
import { TeamsDetailPage } from './teams-detail/teams-detail.page';
import { TournamentsPage } from './tournaments/tournaments.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    GamePage,
    TeamsPage,
    TeamsDetailPage,
    TournamentsPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
