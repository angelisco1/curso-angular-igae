import { Component, inject } from '@angular/core';
import { Logger } from './logger';
import { FormsModule } from '@angular/forms';
import { Traductor } from './traductor';
import { InfoUsuario } from "./info-usuario/info-usuario";
import { Storage } from './storage';

@Component({
  selector: 'app-cmp07-servicios',
  imports: [FormsModule, InfoUsuario],
  templateUrl: './cmp07-servicios.html',
  styleUrl: './cmp07-servicios.css',
})
export class Cmp07Servicios {

  private logger = inject(Logger)
  private traductor = inject(Traductor)
  private userStorage = inject(Storage)

  languages = this.traductor.languages
  langSelected = this.traductor.lang

  login() {
    this.userStorage.setUsuario({
      username: 'cfalco',
      email: 'cfalco@gmail.com',
      nombre: 'Charly Falco'
    })
  }

  logout() {
    this.userStorage.removeUsuario()
  }

  mostrarInfo() {
    // console.log(`[INFO] ${new Date().toLocaleString()} Arrancando el servidor...`)
    this.logger.info('Arrancando el servidor...')
  }

  mostrarWarning() {
    // console.log(`[WARN] ${new Date().toLocaleString()} El puerto 8080 ya está ocupado. Buscando otro...`)
    this.logger.warning('El puerto está ocupado. Buscando otro...')
  }

  mostrarError() {
    this.logger.error('No ha sido posible conectarse con la BBDD.')
  }


}
