import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'lotes',
    loadChildren: () => import('./pages/lotes/lotes.module').then(m => m.LotesModule)
  },
  {
    path: 'trabajos-realizados',
    loadChildren: () => import('./pages/trabajos-realizados/trabajos-realizados.module')
      .then(m => m.TrabajosRealizadosModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
