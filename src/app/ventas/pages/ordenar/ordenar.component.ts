import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  aMayusculas: boolean = false;

  constructor() { }

  cambiaCaps() {
    this.aMayusculas= !this.aMayusculas;
  }
}
