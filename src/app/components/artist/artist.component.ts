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
  id: string;
  artist: any;
  constructor( private spotify: SpotifyService,
               private router : ActivatedRoute) { 

    this.router.params.subscribe( params =>{
       this.id = ( params['id'] );
    })
    this.spotify.getRelatedArtist( this.id )
     .subscribe( data => {
       console.log(data['name'])
      this.artist =  data ;
       return this.artist;
     })
    
  }

}
// 6P5NO5hzJbuOqSdyPB7SJM 4VMYDCV2IEDYJArk749S6m