import { Component, inject, signal } from '@angular/core';
import { User } from "./user/user";
import { Users } from './users';


@Component({
  selector: 'app-cmp09-http',
  imports: [User],
  templateUrl: './cmp09-http.html',
  styleUrl: './cmp09-http.css',
})
export class Cmp09Http {
  userService = inject(Users)

  usuarios = signal<any>([])

  ngOnInit() {
    // Cargar los usuarios
    this.userService.getUsers()
      .subscribe((datos: any) => {
        console.log(datos)
        this.usuarios.set(datos)
        // this.usuarios = datos
      })
  }

}
