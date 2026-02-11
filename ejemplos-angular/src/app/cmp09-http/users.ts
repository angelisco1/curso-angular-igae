import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  url: string = 'https://jsonplaceholder.typicode.com/users'
  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts'
  http = inject(HttpClient)


  getUsers(): Observable<any> {
    // GET url
    return this.http.get(this.url)
      .pipe(
        map((datos: any) => {
          const usuarios = []

          for (let usuario of datos) {
            usuarios.push({
              id: usuario.id,
              name: usuario.name,
              username: usuario.username,
              email: usuario.email,
              website: usuario.website,
            })
          }

          return usuarios
        })
      )
  }

  getPostsDeUsuario(userId: number): Observable<any> {
    return this.http.get(`${this.url}/${userId}/posts`)
  }

  crearPost(post: any): Observable<any> {
    return this.http.post(this.urlPosts, post)
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }

}
