import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderBy : string = 'sin valor' ): Heroe[] {

    switch (orderBy) {
      case 'nombre':
        // la funcion sort necesita que le pasemos un callback 
        // que devuelva >0 si a y b están en orden o < 0 si no
        // están en orden y hay que switchearlos
        return heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1  );

      case 'vuela':
        return heroes = heroes.sort( (a,b) => (a.vuela > b.vuela)? 1 : -1  );

      case 'color':
        return heroes = heroes.sort( (a,b) => (a.color > b.color)? 1 : -1  );

      default:
        return heroes;
    }


    if (orderBy === 'sin valor') return heroes;

    // la funcion sort necesita que le pasemos un callback 
    // que devuelva >0 si a y b están en orden o < 0 si no
    // están en orden y hay que switchearlos
    heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1  )

    return heroes;
  }

}
