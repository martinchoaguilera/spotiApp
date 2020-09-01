import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  info: any ;
  constructor( private http: HttpClient ) { }
  
  getQuery( query: string){

    const url= `https://api.spotify.com/v1/${ query }`;

    const headers= new HttpHeaders({
      'Authorization':'Bearer QBai9FitHQzYkTzlwDY8HUEjLoV3x3kJs2hncpL8b1y0O7m8fEAGigNKG3_UyLy8pE3uAzfkmxIjMyykUE'
    })
    return this.http.get( url , { headers } );
  }
  getNewReleases() {
  
    return this.getQuery( 'browse/new-releases' )
             .pipe( map( data => data['albums'].items))
      
  }

  getArtists( artist: string ){
  
    return this.getQuery( `search?q=${ artist }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items));
  }

  getRelatedArtist( idArtist: string ){
    return this.getQuery( `artists/${ idArtist }` );
  }

  getTopTracks( idArtist: string ){
    return this.getQuery( `artists/${ idArtist }/top-tracks?country=us`)
      .pipe( map( tracks => tracks['tracks']));
  }
}
