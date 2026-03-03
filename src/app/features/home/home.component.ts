import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/imports/shared.imports';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ...SHARED_IMPORTS,
    MegaMenuModule,
    AvatarModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    [x: string]: any;
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
                                { label: 'Theming', routerLink: '/theming' },
                                { label: 'UI Kit', routerLink: '/uikit' }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this['router'].navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    [
                        {
                            label: 'External',
                            items: [
                                { label: 'Angular', url: 'https://angular.dev/' },
                                {
                                    label: 'Vite.js',
                                    url: 'https://vitejs.dev/'
                                }
                            ]
                        }
                    ]
                ]
            }
        ];
    }
}