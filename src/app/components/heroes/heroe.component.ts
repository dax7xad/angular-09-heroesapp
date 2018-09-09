import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IHeroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router   } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel',
  };

  constructor(private _heroesServie: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  guardar = () => {
    console.log(this.heroe);
    this._heroesServie.nuevoheroe( this.heroe )
    .subscribe(data  => {
      console.log(data);
      this.router.navigate(['/heroe', data ]);

    }, error => console.error(error));

  }

}
