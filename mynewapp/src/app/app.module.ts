import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SerieModule} from './serie/serie.module';
import { HttpClientModule } from '@angular/common/http';
import { SerieListComponent } from './serie/serie-list/serie-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule,
    HttpClientModule,
    SerieListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
