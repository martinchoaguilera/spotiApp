import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {
  loading: boolean;
  artist:any = {};
  topTracks: any[] = [];
  constructor(private spotify: SpotifyService,
    private router: ActivatedRoute) {

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getRelatedArtist(id)
      .subscribe( artist => {
        this.loading= false;
        console.log(artist)
        this.artist = artist;
      })
  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks(id)
      .subscribe( topTracks =>{
        console.log( topTracks )
        this.topTracks= topTracks;
      })
  }
}
// 6P5NO5hzJbuOqSdyPB7SJM