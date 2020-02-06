import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BattleModule} from './battle';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BattleModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
