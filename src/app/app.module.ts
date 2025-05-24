import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { YumeyuMainPageComponent } from './direct-page/yumeyu-main-page/yumeyu-main-page.component';
import { MainPageComponent } from './direct-page/main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { YumeyuModule } from './direct-page/yumeyu-main-page/yumeyu.module';
import { YumeyuRoutingModule } from './direct-page/yumeyu-main-page/yumeyu-routing.module';
import { MainRoutingModule } from './direct-page/main-page/main-routing.module';
import { SharedPrimengModule } from './shared-primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    YumeyuMainPageComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    SharedPrimengModule,
    BrowserModule,
    YumeyuModule,
    YumeyuRoutingModule,
    MainRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
