import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports/shared.imports';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-album',
  imports: [...SHARED_IMPORTS, MegaMenuModule, AvatarModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
})
export class AlbumComponent {}
