import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPageComponent } from '../../txn/third-page/third-page.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    ThirdPageComponent,    
  ],    
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
