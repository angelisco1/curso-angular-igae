import { Component } from '@angular/core';
import { Sugus } from "./sugus/sugus";
import { CardSugus } from "./card-sugus/card-sugus";

@Component({
  selector: 'app-cmp04-input-output',
  imports: [Sugus, CardSugus],
  templateUrl: './cmp04-input-output.html',
  styleUrl: './cmp04-input-output.css',
})
export class Cmp04InputOutput {
  sugus = [
    { sabor: 'naranja', color: 'orange' }
  ]

  mostrarProducto(producto: {sabor: string, cantidad: number}) {
    alert(`Se han añadido ${producto.cantidad} sugus de ${producto.sabor}`)
  }
}
