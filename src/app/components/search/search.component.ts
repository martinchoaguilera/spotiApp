import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/compiler';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas :any[]=[];
  loading  :boolean;

  constructor( private spotify:SpotifyService ) {}
  // loadingPage(){
  //   return this.loading= true;
  // }
  buscar( artista :string ){
    this.loading = true;
      this.spotify.getArtist( artista )
        .subscribe( (data: any) =>{
          console.log(data[1].id)
           this.artistas= data;
           this.loading = false;
          })
  }
}
