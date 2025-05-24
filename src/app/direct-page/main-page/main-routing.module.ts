import { NgModule } from '@angular/core';
import { ThirdPageComponent } from '../../txn/third-page/third-page.component';
import { Route, RouterModule, Routes } from '@angular/router';


const routes: Routes =  [
  { path: '', component: ThirdPageComponent },
  { path: 'third', component: ThirdPageComponent },
  { path: '**', redirectTo: '/third' },
] as Route[];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // ✅ 使用 forChild()
  exports: [RouterModule]
})
export class MainRoutingModule { }
