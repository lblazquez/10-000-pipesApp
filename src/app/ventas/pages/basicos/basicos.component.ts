import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  protected textoLower: string = "lorem ipsum";
  protected textoUpper: string = "LOREM IPSUM";
  protected textoCompleto: string = "LoReM iPsUm";

  protected fecha: Date = new Date(); // fecha de hoy

  constructor() { }


}
