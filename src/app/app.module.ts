import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { ScoresComponent } from './scores/scores.component';
import { FieldComponent } from './field/field.component';

import { PercentPipe } from './percent.pipe';

import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ScoresComponent,
    FieldComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
