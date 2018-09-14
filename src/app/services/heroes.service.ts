import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IHeroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  // https://heroesapp-973e8.firebaseio.com/heroes/-LMAfreQhLrbISlC4c4b.json
  heroesURL = 'https://heroesapp-973e8.firebaseio.com/heroes.json';
  heroeURL =  'https://heroesapp-973e8.firebaseio.com/heroes/';
  constructor(private http: Http) { }

  nuevoheroe = (heroe: IHeroe) => {
    const body = JSON.stringify(heroe);
    const options = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers: options})
    .pipe(map( res => {
      const {name: id} =  res.json();
      console.log(id);
      return id;
    }));
  }

  actualizarHeroe = (heroe: IHeroe , key$: string) => {
    const body = JSON.stringify(heroe);
    const options = new Headers({
      'Content-Type': 'application/json'
    });

    const URL = `${this.heroeURL}${key$}.json`;

    return this.http.put( URL, body, { headers: options})
    .pipe(map( res => {
      return res.json();
    }));
  }

  obtenerHeroe = (key$: string) => {
    const URL = `${this.heroeURL}${key$}.json`;

    return this.http.get( URL)
    .pipe(map( res => {
      return res.json();
    }));
  }

  listarHeroe = () => {


    return this.http.get( this.heroesURL)
    .pipe(map( res => {
      return res.json();
    }));
  }

}
