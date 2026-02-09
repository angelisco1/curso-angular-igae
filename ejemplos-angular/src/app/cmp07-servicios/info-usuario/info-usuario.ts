import { Component, inject } from '@angular/core';
import { Traductor } from '../traductor';
import { TraducirPipe } from '../traducir-pipe';
import { Storage } from '../storage';

@Component({
  selector: 'app-info-usuario',
  imports: [TraducirPipe],
  templateUrl: './info-usuario.html',
  styleUrl: './info-usuario.css',
})
export class InfoUsuario {
  // traductor = inject(Traductor)
  userStorage = inject(Storage)

  usuario = this.userStorage.getUsuario()

}
