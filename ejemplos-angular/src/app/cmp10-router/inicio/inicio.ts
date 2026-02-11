import { Component, inject, signal } from '@angular/core';
import { Users } from '../../cmp09-http/users';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink,
    RouterOutlet,
],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  usuariosService = inject(Users)
  usuarios = signal<any>([])

  ngOnInit() {
    this.usuariosService.getUsers()
      .subscribe((datos: any) => {
        this.usuarios.set(datos)
      })
  }
}
