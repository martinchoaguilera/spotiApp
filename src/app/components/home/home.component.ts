import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {
  
  nuevasCanciones: any[]= [];
  loading: boolean;
  error  : boolean;
  errorService:string;
  constructor( private spotify: SpotifyService) {
      this.loading= true;
      this.error  = false;
      this.spotify.getNewReleases()
      .subscribe( (data :any)=>{
        this.nuevasCanciones= data;
        this.loading        = false;
      }, ( e )=>{
        this.errorService = e.error.error.message;
        this.error= true;
        this.loading        = false;
      })
  }

}
