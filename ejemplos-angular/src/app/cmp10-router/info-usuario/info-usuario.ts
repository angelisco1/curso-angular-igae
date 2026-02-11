import { JsonPipe } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Users } from '../../cmp09-http/users';

@Component({
  selector: 'app-info-usuario',
  imports: [
    JsonPipe,
  ],
  templateUrl: './info-usuario.html',
  styleUrl: './info-usuario.css',
})
export class InfoUsuario {
  // route = inject(ActivatedRoute)
  usersService = inject(Users)
  userId = input<string>('')
  // Si ponemos en la ruta el queryParam ?edit=algo, el input edit recibe "algo"
  // edit = input()
  usuario = signal<any>(null)

  constructor() {
    // this.route.paramMap
    //   .subscribe((params: ParamMap) => {
      //     console.log(params.get('userId'))
      //   })
    // console.log(this.route)

    // console.log(this.userId())
    // console.log(this.edit())
    effect(() => {
      this.usersService.getUserById(this.userId())
        .subscribe((datos: any) => {
          this.usuario.set(datos)
        })
    })
  }

}
