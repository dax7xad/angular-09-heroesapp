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

  constructor(private _serviceHeroe: HeroesService) {
    this._serviceHeroe.listarHeroe()
    .subscribe(response => this.heroes = response);
   }

  ngOnInit() {
  }

}
