import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports/shared.imports';

@Component({
  selector: 'app-album',
  imports: [...SHARED_IMPORTS],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
})
export class AlbumComponent {}
