import { Injectable, signal } from '@angular/core';

interface ITraducciones {
  [key: string]: {
    [key: string]: string
  }
}

const TRADUCCIONES: ITraducciones = {
  es: {
    bienvenido: 'Bienvenido',
    usuario: 'Usuario',
    email: 'Correo electrónico'
  },
  en: {
    bienvenido: 'Welcome',
    usuario: 'User',
    email: 'Email'
  },
  it: {
    bienvenido: 'Benvenuto',
    usuario: 'Utente',
    email: 'Email'
  },
}


@Injectable({
  providedIn: 'root',
})
export class Traductor {
  languages = [
    { code: 'es', text: 'Español' },
    { code: 'en', text: 'Inglés' },
    { code: 'it', text: 'Italiano' },
  ]

  lang = signal<string>('es')

  traducir(clave: string) {
    return TRADUCCIONES[this.lang()][clave]
  }

}
