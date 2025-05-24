import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-yumeyu-main-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './yumeyu-main-page.component.html',
  styleUrl: './yumeyu-main-page.component.css'
})
export class YumeyuMainPageComponent {
  ngOnInit(): void {
    console.log("YumeyuRoutingModule ngOnInit");
  }
}
