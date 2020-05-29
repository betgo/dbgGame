import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { BattleModule } from './battle';
import { AppRoutingModule } from './app-routing.module';
import { MapModule } from './map';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BattleModule,
    MapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
