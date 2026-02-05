import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToEmojiActivoPipe } from './to-emoji-activo-pipe';

@Component({
  selector: 'app-cmp05-control-flujo',
  imports: [
    UpperCasePipe,
    ToEmojiActivoPipe,
    FormsModule,
  ],
  templateUrl: './cmp05-control-flujo.html',
  styleUrl: './cmp05-control-flujo.css',
})
export class Cmp05ControlFlujo {

  isAuthenticated = signal<boolean>(false)

  usuarios = signal<Array<{id: number, nombre: string, activo: boolean, departamento: string}>>([
    { id: 91, nombre: 'Ana García', activo: true, departamento: 'Ventas' },
    { id: 202, nombre: 'Carlos López', activo: false, departamento: 'IT' },
    { id: 1620, nombre: 'Lucía Pérez', activo: true, departamento: 'Recursos Humanos' },
    { id: 3, nombre: 'Marcos Ruiz', activo: true, departamento: 'Marketing' },
    { id: 39, nombre: 'Elena Beltrán', activo: false, departamento: 'Ventas' },
    { id: 600, nombre: 'David Sanz', activo: true, departamento: 'IT' },
    { id: 78, nombre: 'Sofía Cano', activo: true, departamento: 'Legal' },
    { id: 108, nombre: 'Javier Otto', activo: false, departamento: 'Marketing' },
    { id: 91, nombre: 'Laura Méndez', activo: true, departamento: 'IT' },
    { id: 110, nombre: 'Pablo Ferrero', activo: true, departamento: 'Operaciones' }
  ]);

  roles = ['admin', 'premium', 'free']
  rolSeleccionado = signal<string>('free')

  login() {
    this.isAuthenticated.set(true)
  }

  logout() {
    this.isAuthenticated.set(false)
  }

  vaciarLista() {
    this.usuarios.set([])
  }
}
