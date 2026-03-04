import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared/imports/shared.imports';
import { MegaMenuItem } from 'primeng/api';
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
  // ✅ 1. 正確注入 Router，這樣它就是一個真正的屬性，不再需要透過索引存取
  private router = inject(Router);
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          [
            {
              label: 'RouterLink',
              items: [
                { label: 'page1', routerLink: '/home/page1' },
                { label: 'page2', routerLink: '/home/page2' },
              ],
            },
          ],
        ],
      },
      {
        label: 'page3',
        icon: 'pi pi-link',
        command: () => {
          this.router.navigate(['/home/page3']);
        },
      },
    ];
  }
}
