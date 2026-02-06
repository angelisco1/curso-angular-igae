import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { Focus } from "./focus";

@Component({
  selector: 'app-cmp06-formularios',
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    Focus
],
  templateUrl: './cmp06-formularios.html',
  styleUrl: './cmp06-formularios.css',
})
export class Cmp06Formularios {

  form: FormGroup

  constructor() {
    this.form = this.inicializarForm()
  }

  registro() {
    console.log(this.form)

    const usuario = this.form.value
    // Habría que llamar al servicio de signup con el usuario
    // POST /usuarios {usuario}
  }

  private inicializarForm() {
    return new FormGroup({
      username: new FormControl('', Validators.required),
      // email: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z]*@[a-z]*\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidators.conSimbolos]),
    })
  }

  // {
  //   required: true
  // }

  // [
  //   {key: required, value: true}
  //   {key: minlength, value: {
  //     actualLength: 3,
  //     requiredLength: 8
  //   }}
  // ]

  // {
  //   nombre: '',
  //   direccion: '',
  //   telefono: {
  //     // fijo: {
  //     //   numero: ''
  //     // },
  //     movil: {
  //       prefijo: '',
  //       numero: ''
  //     }
  //   }
  // }

  // // if (usuario && usuario.telefono.fijo && usuario.telefono.fijo.numero)
  // if (usuario?.telefono?.fijo?.numero)
  // if (usuario?.telefono?.fijo!.numero)

}
