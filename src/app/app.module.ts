import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewcompoComponent } from './newcompo/newcompo.component';
import { FriendsService } from './friends.service';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import { PagNotfoundComponent } from './pag-notfound/pag-notfound.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcompoComponent,
    PagNotfoundComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
