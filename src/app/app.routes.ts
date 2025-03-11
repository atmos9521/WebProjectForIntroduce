import { Routes } from '@angular/router';
import { LoginPageComponent } from './direct-page/login-page/login-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent }, // 設定根路徑的首頁
    { path: 'login', component: LoginPageComponent }, // 設定 /login 路由，顯示 MainComponent
];
