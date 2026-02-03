import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cmp03-signals',
  imports: [],
  templateUrl: './cmp03-signals.html',
  styleUrl: './cmp03-signals.css',
})
export class Cmp03Signals {
  cuenta = signal<number>(0)

  decrementar() {
    const nuevaCuenta = this.cuenta() - 1
    this.cuenta.set(nuevaCuenta)
  }

  incrementar() {
    this.cuenta.update((cuentaActual: number) => {
      return cuentaActual + 1
    })
  }

  resetearCuenta() {

  }

  cambiarCuenta() {

  }

}
