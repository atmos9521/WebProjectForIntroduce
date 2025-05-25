import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPageComponent } from '../../txn/third-page/third-page.component';
import { MainRoutingModule } from './main-routing.module';
import { IntroduceMainPageComponent } from '../../txn/introduce-main-page/introduce-main-page.component';


@NgModule({
  declarations: [
    ThirdPageComponent,
    IntroduceMainPageComponent,
  ],    
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
