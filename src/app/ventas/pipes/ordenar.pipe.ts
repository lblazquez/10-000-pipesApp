import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[] ): Heroe[] {

    // la funcion sort necesita que le pasemos un callback 
    // que devuelva >0 si a y b están en orden o < 0 si no
    // están en orden y hay que switchearlos
    heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1  )

    return heroes;
  }

}
