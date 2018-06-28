
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {SongsService} from './songs.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
