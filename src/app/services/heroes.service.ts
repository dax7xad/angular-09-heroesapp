import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IHeroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-973e8.firebaseio.com/heroes.json';

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
}
