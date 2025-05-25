import { Routes } from '@angular/router';
import { MainPageComponent } from './direct-page/main-page/main-page.component';

export const routes: Routes = [
    { 
        path: 'main',
        // component: MainPageComponent,
        loadComponent: () => import('./direct-page/main-page/main-page.component').then(m=>m.MainPageComponent),
        loadChildren: () => import('./direct-page/main-page/main-routing.module').then(m=>m.MainRoutingModule),
        pathMatch: 'prefix'
    },
    { 
        path: 'yu',
        // component: YumeyuMainPageComponent,
        loadComponent: () => import('./direct-page/yumeyu-main-page/yumeyu-main-page.component').then(m=>m.YumeyuMainPageComponent),
        loadChildren: () => import('./direct-page/yumeyu-main-page/yumeyu-routing.module').then(m=>m.YumeyuRoutingModule),
        pathMatch: 'prefix'
    },
    { 
        path: 'error',
        // component: ErrorPageComponent,
        loadComponent: () => import('./direct-page/error-page/error-page.component').then(m=>m.ErrorPageComponent),
        pathMatch: 'prefix'
    },    
    { 
        path: '',
        // component: MainPageComponent,
        loadComponent: () => import('./direct-page/main-page/main-page.component').then(m=>m.MainPageComponent),
        loadChildren: () => import('./direct-page/main-page/main-routing.module').then(m=>m.MainRoutingModule),
    },
    { path: 'login', component: MainPageComponent },  // 設定 /login 路由，顯示 MainPageComponent
    { path: '**', redirectTo: 'error', pathMatch: 'prefix' },
];
