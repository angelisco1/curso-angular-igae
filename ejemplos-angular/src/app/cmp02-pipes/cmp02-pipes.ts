import { CurrencyPipe, DatePipe, JsonPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp02-pipes',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './cmp02-pipes.html',
  styleUrl: './cmp02-pipes.css',
})
export class Cmp02Pipes {

  producto = {
    titulo: 'one plus 14',
    precio: 799.99,
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsam in distinctio expedita dolor rem maxime, cumque impedit, accusantium labore deleniti dignissimos laudantium. Perspiciatis in vel hic beatae adipisci error?',
    fechaLanzamiento: new Date(2024, 5, 12)
  }

}
