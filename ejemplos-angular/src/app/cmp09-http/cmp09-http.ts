import { Component, inject, signal } from '@angular/core';
import { User } from "./user/user";
import { Users } from './users';
import { BuscadorCocktails } from "./buscador-cocktails/buscador-cocktails";


@Component({
  selector: 'app-cmp09-http',
  imports: [User, BuscadorCocktails],
  templateUrl: './cmp09-http.html',
  styleUrl: './cmp09-http.css',
})
export class Cmp09Http {
  userService = inject(Users)

  usuarios = signal<any>([])
  posts = signal<any>([])

  ngOnInit() {
    // Cargar los usuarios
    this.userService.getUsers()
      .subscribe((datos: any) => {
        console.log(datos)
        this.usuarios.set(datos)
        // this.usuarios = datos
      })
  }

  cargarPostsDeUsuario(userData: {userId: number}) {
    this.userService.getPostsDeUsuario(userData.userId)
      .subscribe((posts: any) => {
        console.log(posts)
        this.posts.set(posts)
      })
  }

  crearPost() {
    const nuevoPost = {
      body: "el body de un nuevo post",
      title: "un nuevo post",
      userId: 8
    }
    this.userService.crearPost(nuevoPost)
      .subscribe((datos: any) => {
        console.log(datos)
        alert('Se ha creado el post con el id ' + datos.id)
      })
  }

}
