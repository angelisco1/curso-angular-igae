import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-sugus',
  imports: [],
  templateUrl: './sugus.html',
  styleUrl: './sugus.css',
})
export class Sugus {

  // @Input() sabor: string = 'limón'
  // @Input() color: string = 'yellow'
  sabor = input<string>('limón')
  color = input<string>('yellow')
  // sabor = 'fresa'
  // color = 'red'

}
