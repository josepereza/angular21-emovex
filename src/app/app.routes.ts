import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page.component').then((m) => m.HomePageComponent),
    title: 'EMOVEX | Tecnología estética profesional diseñada para resultados reales'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
