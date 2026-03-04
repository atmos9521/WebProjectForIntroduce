import { Routes } from '@angular/router';

export const routes: Routes = [
  // ✅ 預設導向 home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ✅ home 路由
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    children: [
      // 預設 home 導向 page1
      { path: '', redirectTo: 'page1', pathMatch: 'full' },
      {
        path: 'page1',
        loadComponent: () =>
          import('./features/testPage/test-page-1/test-page-1.component').then(
            (m) => m.TestPage1Component,
          ),
      },
      {
        path: 'page2',
        loadComponent: () =>
          import('./features/testPage/test-page-2/test-page-2.component').then(
            (m) => m.TestPage2Component,
          ),
      },
      {
        path: 'page3',
        loadComponent: () =>
          import('./features/testPage/test-page-3/test-page-3.component').then(
            (m) => m.TestPage3Component,
          ),
      },
    ],
  },

  // ✅ error 路由
  {
    path: 'error',
    loadComponent: () =>
      import('./features/error/error.component').then((m) => m.ErrorComponent),
  },

  // ✅ 未知網址導回 error
  { path: '**', redirectTo: 'error' },
];
