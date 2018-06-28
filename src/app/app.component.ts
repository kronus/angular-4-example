
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-songs',
  template: `
		<div>
      <span>Hover over the Title for tooltip description. It takes a moment for the first tooltip</span>
      <ul class="list-group list-inline mHeaders">
        <li class="list-group-item">Title</li>
        <li class="list-group-item">Band</li>
        <li class="list-group-item">Date Posted</li>
        <li class="list-group-item">Downloads</li>
        <li class="list-group-item">YouTube</li>
        <li class="list-group-item">MP3</li>
      </ul>
      <ul class="list-group list-inline" *ngFor="let item of results | paginate: { itemsPerPage: 10, currentPage: p }">
        <li class="list-group-item" data-toggle="tooltip" data-placement="top" title="{{item.description}}">
          {{item.title}} 
        </li>
        <li class="list-group-item">
          {{item.original_band}}
        </li>
        <li class="list-group-item">
          {{item.date_posted}}
        </li>
        <li class="list-group-item mZip" (click)="linkToGo(item.download_midi_tabs)">
          <a href="{{item.download_midi_tabs}}" target="_blank"></a>
        </li>
        <li class="list-group-item mYt" (click)="linkToGo(item.youtube_link)">
          <a href="{{item.youtube_link}}" target="_blank"></a>
        </li>
        <li class="list-group-item mAudio" (click)="linkToGo(item.download_guitar_m4v)">
          <a href="{{item.download_guitar_m4v}}" target="_blank"></a>
        </li>
      </ul>
      <pagination-controls (pageChange)="p = $event"></pagination-controls>
    </div>
  `,
  styleUrls: ['app.component.css']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppComponent {
  title = 'app-songs';
  results: object;

  constructor(private httpClient: HttpClient){
  }

  linkToGo(event){
    console.log(event);
    window.open(event,'_blank');
  }

  ngOnInit(): void {
    // local

    this.httpClient.get('http://local.sites/angular-practice/songs/src/app/getSongs.php').subscribe(data => {
      console.log(data[0]);
      this.results = data;
    });


    // production
    /*
    this.httpClient.get('http://kronusproductions.com/songs_angular/getSongs.php').subscribe(data => {
        console.log(data[0]);
        this.results = data;
    });
    */
  }
}
