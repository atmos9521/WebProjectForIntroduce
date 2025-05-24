import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'web_site';

  // fruits = [
  //   { name: 'Apple', color: 'Red' },
  //   { name: 'Banana', color: 'Yellow' },
  //   { name: 'Cherry', color: 'Red' },
  //   { name: 'Date', color: 'Brown' },
  //   { name: 'Elderberry', color: 'Purple' }
  // ];

  // toggleAnswer(){
  //   console.log("test click!");
  // }

  ngOnInit(): void {
    console.log("AppComponent ngOnInit");
  }
}
