import { Component, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  subscription: Subscription = new Subscription()
  cuenta = signal<number>(0)

  ngOnInit() {
    this.subscription = interval(1000)
      .subscribe((num) => {
        console.log('Cuenta: ' + num)
        this.cuenta.set(num)
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
