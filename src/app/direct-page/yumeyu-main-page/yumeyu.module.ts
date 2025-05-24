import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from '../../txn/first-page/first-page.component';
import { SecPageComponent } from '../../txn/sec-page/sec-page.component';
import { YumeyuRoutingModule } from './yumeyu-routing.module';



@NgModule({
  declarations: [
    FirstPageComponent,
    SecPageComponent,
  ],    
  imports: [
    CommonModule,
    YumeyuRoutingModule
  ]
})
export class YumeyuModule { }
