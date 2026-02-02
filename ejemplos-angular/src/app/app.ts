import { Component, signal } from '@angular/core';
import { Cmp01DataBinding } from './cmp01-data-binding/cmp01-data-binding';


@Component({
  selector: 'app-root',
  imports: [
    Cmp01DataBinding
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
