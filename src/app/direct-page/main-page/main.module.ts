import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPageComponent } from '../../txn/third-page/third-page.component';
import { MainRoutingModule } from './main-routing.module';
import { IntroduceMainPageComponent } from '../../txn/introduce-main-page/introduce-main-page.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ThirdPageComponent,
    IntroduceMainPageComponent,
  ]
})
export class MainModule { }
