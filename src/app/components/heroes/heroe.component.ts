import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IHeroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute  } from '@angular/router';

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

  nuevo = true;
  id: string;
  constructor(private _heroesServie: HeroesService, private router: Router , private route: ActivatedRoute) {
    this.route.params
    .subscribe( p => {

      this.id = p['id'];
      console.log(p);
      console.log('params el valor id=', this.id);
      this.nuevo = (this.id === 'nuevo') ? true : false;
    });
  }

  ngOnInit() {
  }

  SaveChanges = () => {

    if (this.nuevo) {
      // Insertando un nuevo heroe
      this.PostHeroe();
    } else {
      // Modificando un heroe existente
      this.PutHeroe();
    }

  }

  PostHeroe = () => {
    console.log(this.heroe);
    this._heroesServie.nuevoheroe( this.heroe )
    .subscribe(data  => {
      console.log(data);
      this.router.navigate(['/heroe', data ]);

    }, error => console.error(error));
  }

  PutHeroe = () => {
    console.log('id en el put:', this.id);
    this._heroesServie.actualizarHeroe( this.heroe, this.id )
    .subscribe(data  => {
      console.log(data);
    }, error => console.error(error));
  }

}
