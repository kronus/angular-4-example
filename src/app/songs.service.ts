
import {NgModule, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Song} from './song';

@NgModule({
  imports: [
    HttpClient
  ]
})

export class SongsService{

  mData: Object;

  constructor(private httpClient: HttpClient){
  }

  getSongs(){
    this.httpClient.get<Song[]>('http://local.sites/angular-practice/songs/src/app/getSongs.php').subscribe(data => {
      console.log(data);
      return data;
    });
  }
}
