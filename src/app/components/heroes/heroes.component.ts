import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];
  loading = true ;
  constructor(private _serviceHeroe: HeroesService) {
    this._serviceHeroe.listarHeroe()
    .subscribe(response => {
      this.heroes = response;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  DeleteHeroe = ( key$: string ) => {
    this._serviceHeroe.eliminarHeroe(key$)
    .subscribe( response => {
      if (response) {
        console.error(response);
      } else {
        // Todo bien
        delete this.heroes[key$];
      }
    });
    return;
  }

}
