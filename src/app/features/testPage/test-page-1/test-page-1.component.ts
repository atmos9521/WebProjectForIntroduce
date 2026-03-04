import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page-1',
  imports: [],
  templateUrl: './test-page-1.component.html',
  styleUrl: './test-page-1.component.css',
})
export class TestPage1Component {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
