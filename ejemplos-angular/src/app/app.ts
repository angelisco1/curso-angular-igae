import { Component, signal } from '@angular/core';
import { Cmp01DataBinding } from './cmp01-data-binding/cmp01-data-binding';
import { Cmp02Pipes } from './cmp02-pipes/cmp02-pipes';
import { Cmp03Signals } from "./cmp03-signals/cmp03-signals";



@Component({
  selector: 'app-root',
  imports: [
    Cmp01DataBinding,
    Cmp02Pipes,
    Cmp03Signals
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
