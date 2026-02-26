import { Routes } from '@angular/router';

export const routes: Routes = [
    // ✅ 預設導向 home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ✅ home 路由
  { path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },

  // ✅ error 路由
  { path: 'error',
    loadComponent: () =>
      import('./features/error/error.component').then(m => m.ErrorComponent)
  },

  // ✅ 未知網址導回 error
  { path: '**', redirectTo: 'error' }
];
