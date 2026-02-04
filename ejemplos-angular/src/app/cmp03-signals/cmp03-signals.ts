import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp03-signals',
  imports: [
    CurrencyPipe,
    FormsModule,
  ],
  templateUrl: './cmp03-signals.html',
  styleUrl: './cmp03-signals.css',
})
export class Cmp03Signals {
  cuenta = signal<number>(0)
  precioSinIva = signal<number>(10)
  descuento = signal<number>(50)

  precioConIva = computed(() => {
    return this.precioSinIva() + (this.precioSinIva() * 0.21)
  })

  precioTotal = computed(() => {
    return this.precioConIva() - (this.precioConIva() * (this.descuento() / 100))
  })

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
    this.cuenta.set(0)
  }

  cambiarCuenta(event: Event) {
    const nuevoValor: number = Number((event.target as HTMLInputElement).value)
    // this.cuenta.update((valorActual: number) => {
    //   return nuevoValor
    // })
    this.cuenta.set(nuevoValor)
  }

  cambiarPrecio(event: Event) {
    const nuevoValor: number = Number((event.target as HTMLInputElement).value)
    this.precioSinIva.set(nuevoValor)
  }

}
