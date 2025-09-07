import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/signup/signup').then((c) => c.Signup),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((c) => c.Login),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // optional: wildcard fallback
  {
    path: '**',
    redirectTo: 'login',
  },
];
