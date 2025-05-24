import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sec-page',
  imports: [],
  templateUrl: './sec-page.component.html',
  styleUrl: './sec-page.component.css'
})
export class SecPageComponent implements OnInit {
  private activeRouter = inject(ActivatedRoute);
  ngOnInit(): void {
    console.log("SecPageComponent ngOnInit");
  }

  getDetailID(): void {
    // const id = this.activeRouter.snapshot.paramMap.get('id');
    // console.log(id);
  }
}
