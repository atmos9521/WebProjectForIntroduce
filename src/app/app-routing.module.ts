import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// const routes: Routes =  [
//   { path: '', component: IntroduceMainPageComponent },
//   { path: 'sec', component: SecPageComponent },
//   { path: 'introduce', component: IntroduceMainPageComponent },
//   { path: '**', redirectTo: '/third' },
// ] as Route[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   // 👈 這行很重要
})
export class AppRoutingModule { }
