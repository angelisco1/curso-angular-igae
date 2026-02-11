import { Routes } from '@angular/router';
import { Inicio } from './cmp10-router/inicio/inicio';
import { NuevoUsuario } from './cmp10-router/nuevo-usuario/nuevo-usuario';
import { InfoUsuario } from './cmp10-router/info-usuario/info-usuario';

export const routes: Routes = [
  {
    path: 'usuarios',
    component: Inicio,
    children: [
      { path: ':userId', component: InfoUsuario }
    ]
  },
  { path: 'nuevo-usuario', component: NuevoUsuario },
  // { path: 'usuarios/:userId', component: InfoUsuario },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];
