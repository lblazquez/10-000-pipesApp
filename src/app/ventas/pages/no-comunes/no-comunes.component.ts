import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect 
  nombreInvitado: string = 'Adán';
  genero: string = 'M'
  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  cambiaInvitado() {
    if (this.nombreInvitado === 'Adán') {
      this.nombreInvitado = 'Eva';
      this.genero = 'F';
    } else {
      this.nombreInvitado = 'Adán';
      this.genero = 'M';
    }
    
  }

  // i18nPlural
  clientes: string[] = ['Cliente v','Cliente w','Cliente x', 'Cliente y', 'Cliente z'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }
  quitarCliente() {
    this.clientes.pop();
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // KeyValue Pipe
  persona = {
    nombre: 'Armando Bulla',
    edad: 55,
    direccion: 'Madrid, España'
  }

  // Async Pipe
  miObservable = interval (2000); // emite 0,1,2,3,4,5,6 ...

  contador: number = 1;
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve ('Tenemos datos de la promesa')
    }, 3500)
  } );

}
