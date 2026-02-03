import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp01-data-binding',
  imports: [
    FormsModule,
  ],
  templateUrl: './cmp01-data-binding.html',
  styleUrl: './cmp01-data-binding.css',
})
export class Cmp01DataBinding {
  nombre: string = 'Charly'
  apellido: string = 'Falco'
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png'
  nombreFramework: string = 'Angular'

  // <variable>: <tipo> = <valor>
  // string, number, boolean, any, undefined, null
  // Array<string>, Array<number>, number[], boolean[]

  getNombreCompleto(): string {
    // return this.nombre + ' ' + this.apellido
    return `${this.nombre} ${this.apellido}`
  }

  mostrarMensaje(mensaje: string) {
    alert(mensaje)
  }

  cambiarApellido(event: Event) {
    console.log(event)
    this.apellido = (event.target as HTMLInputElement).value
  }

}
