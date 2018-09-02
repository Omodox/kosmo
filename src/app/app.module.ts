import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllhttpService } from './allhttp.service';
import { IframePipe } from './iframe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DashboardComponent,
    DeveloperComponent,
    NavbarComponent,
    IframePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AllhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
