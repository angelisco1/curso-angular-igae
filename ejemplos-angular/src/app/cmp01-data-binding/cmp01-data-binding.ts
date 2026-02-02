import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  imports: [],
  templateUrl: './cmp01-data-binding.html',
  styleUrl: './cmp01-data-binding.css',
})
export class Cmp01DataBinding {
  nombre: string = 'Charly'
  apellido: string = 'Falco'

  // <variable>: <tipo> = <valor>
  // string, number, boolean, any, undefined, null
  // Array<string>, Array<number>, number[], boolean[]

  getNombreCompleto(): string {
    // return this.nombre + ' ' + this.apellido
    return `${this.nombre} ${this.apellido}`
  }

}
