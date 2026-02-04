import { Component, EventEmitter, input, Output, output, signal } from '@angular/core';
import { Sugus } from "../sugus/sugus";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-sugus',
  imports: [
    Sugus,
    FormsModule
  ],
  templateUrl: './card-sugus.html',
  styleUrl: './card-sugus.css',
})
export class CardSugus {
  cantidad = signal<number>(0)
  // @Output() onAddSugus = new EventEmitter<{sabor: string, cantidad: number}>()
  onAddSugus = output<{sabor: string, cantidad: number}>()
  sugus = input<{sabor: string, color: string}>()
  // sabor = input<string>('limón')
  // color = input<string>('yellow')

  addSugus() {
    this.onAddSugus.emit({sabor: 'limón', cantidad: this.cantidad()})
  }

}
