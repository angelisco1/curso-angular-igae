import { Component, signal } from '@angular/core';
import { filter, map, interval, Observable, Subscriber, Subscription } from 'rxjs';
import { Cuenta } from "./cuenta/cuenta";

@Component({
  selector: 'app-cmp08-observables',
  imports: [Cuenta],
  templateUrl: './cmp08-observables.html',
  styleUrl: './cmp08-observables.css',
})
export class Cmp08Observables {

  subscriptions: Subscription | null = new Subscription()
  mostrarCuenta = signal<boolean>(true)

  ngOnInit() {

    // let a: number | string | Array<any> = 1
    // a = 'dos'
    // a = []

    // const b = 2
    // b = 19

    const s1 = interval(1000)
      .pipe(
        filter((num: number) => num % 2 === 0 && num > 10),
        map((num: number) => `El usuario con id ${num} cumple las condiciones`)
      )
      .subscribe((msg: string) => {
        console.log(msg)
      })

    const s2 = interval(1000)
      .subscribe({
        next: (num: number) => {
          console.log('El ' + num)
        },
        error: (err: any) => {
          console.log('Error: ', err)
        },
        complete: () => {
          console.log('Se terminó!')
        }
      })

    const miPropioIntervalObservable = new Observable((subscriber: Subscriber<number>) => {
      let num = 0

      const intervalId = setInterval(() => {
        subscriber.next(num)
        num += 1
        console.log(num)

        if (num === 4) {
          // subscriber.error('Ha habido un error.')
          subscriber.complete()
        }
      }, 1000)

      return () => {
        clearInterval(intervalId)
      }
    })

    const s3 = miPropioIntervalObservable
      .subscribe({
        next: (num: number) => {
          console.log('Mi propio observable ha enviado un ' + num)
        },
        error: (err: any) => {
          console.log('Error: ', err)
        },
        complete: () => {
          console.log('Se terminó!')
        }
      })

    this.subscriptions?.add(s1)
    this.subscriptions?.add(s2)
    this.subscriptions?.add(s3)
  }

  cancelarSuscripciones() {
    this.subscriptions?.unsubscribe()
  }

  toggleCuenta() {
    this.mostrarCuenta.update((current: boolean) => {
      const res = !current
      return res
    })
  }

}
