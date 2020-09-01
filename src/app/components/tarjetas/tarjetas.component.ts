import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[]=[];
  
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  verArtista( item: any ){
    let artistId;
    if( item.type == 'album' ){
      artistId= item.artists[0].id;
    }
    if( item.type == 'artist' ){
      artistId= item.id;
    }

    this.router.navigate( [ '/artist' , artistId ] );

  }

}