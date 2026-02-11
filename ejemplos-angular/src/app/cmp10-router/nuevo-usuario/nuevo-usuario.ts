import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  imports: [],
  templateUrl: './nuevo-usuario.html',
  styleUrl: './nuevo-usuario.css',
})
export class NuevoUsuario {
  router = inject(Router)

  guardar() {
    setTimeout(() => {
      // Enviar al usuario al inicio
      alert('Se ha guardado el usuario')
      // this.router.navigate(['/'])
      this.router.navigateByUrl('/')
    }, 2000)
  }

}
