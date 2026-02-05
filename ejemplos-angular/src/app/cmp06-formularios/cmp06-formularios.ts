import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp06-formularios',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cmp06-formularios.html',
  styleUrl: './cmp06-formularios.css',
})
export class Cmp06Formularios {

  form: FormGroup

  constructor() {
    this.form = this.inicializarForm()
  }


  private inicializarForm() {
    return new FormGroup({

    })
  }

}
