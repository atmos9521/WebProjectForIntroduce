import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/imports/shared.imports';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [...SHARED_IMPORTS],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
