import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/imports/shared.imports';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [...SHARED_IMPORTS, MegaMenuModule, AvatarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {}
}
