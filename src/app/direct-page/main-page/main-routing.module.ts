import { NgModule } from '@angular/core';
import { ThirdPageComponent } from '../../txn/third-page/third-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { IntroduceMainPageComponent } from '../../txn/introduce-main-page/introduce-main-page.component';
import { SecPageComponent } from '../../txn/sec-page/sec-page.component';


const routes: Routes =  [
  { path: '', component: IntroduceMainPageComponent },
  { path: 'sec', component: SecPageComponent },
  { path: 'introduce', component: IntroduceMainPageComponent },
  { path: '**', redirectTo: '/third' },
] as Route[];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // ✅ 使用 forChild()
  exports: [RouterModule]
})
export class MainRoutingModule { }
