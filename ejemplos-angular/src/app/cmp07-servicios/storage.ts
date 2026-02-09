import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  KEY: string = 'usuario'

  setUsuario(datos: {username: string, email: string, nombre: string}) {
    localStorage.setItem(this.KEY, JSON.stringify(datos))
  }

  getUsuario() {
    const datos = localStorage.getItem(this.KEY)
    if (datos) {
      return JSON.parse(datos)
    }
    return null
  }

  removeUsuario() {
    localStorage.removeItem(this.KEY)
  }
}
