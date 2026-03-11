import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './core/api.service';
import { MenuItem } from 'primeng/api';
import { SHARED_IMPORTS } from './shared/imports/shared.imports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ...SHARED_IMPORTS],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private apiService = inject(ApiService);
  // ✅ 1. 正確注入 Router，這樣它就是一個真正的屬性，不再需要透過索引存取
  private router = inject(Router);
  items: MenuItem[] | undefined;

  title = 'web_site';

  ngOnInit(): void {
    // 由DB取得menu
    this.apiService.postMenuData().subscribe((res: any) => {
      const rawData: SysMenuRaw[] = res.message.result;
      // 開始生成Menu
      this.items = this.transformToTree(rawData);
    });

    // 固定表單範例:
    // this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //   },
    //   {
    //     label: 'Features',
    //     icon: 'pi pi-star',
    //   },
    //   {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //     items: [
    //       {
    //         label: 'Components',
    //         icon: 'pi pi-bolt',
    //       },
    //       {
    //         label: 'Blocks',
    //         icon: 'pi pi-server',
    //       },
    //       {
    //         label: 'UI Kit',
    //         icon: 'pi pi-pencil',
    //       },
    //       {
    //         label: 'Templates',
    //         icon: 'pi pi-palette',
    //         items: [
    //           {
    //             label: 'Apollo',
    //             icon: 'pi pi-palette',
    //             routerLink: '/home/page2',
    //           },
    //           {
    //             label: 'Ultima',
    //             icon: 'pi pi-palette',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Contact',
    //     icon: 'pi pi-envelope',
    //   },
    // ];
  }

  transformToTree(data: SysMenuRaw[]): MenuItem[] {
    // 1. 建立一個對應表，方便快速搜尋
    const map = new Map<number, any>();
    const tree: MenuItem[] = [];

    // 2. 初始化物件，並處理 trim() 空白問題
    data.forEach((item) => {
      map.set(item.menu_Id, {
        label: item.label,
        icon: item.icon,
        // 如果有 routerLink 才賦值
        routerLink: item.routerLink?.trim() || undefined,
        items: [], // 預留子項目的空間
      });
    });

    // 3. 建立階層關係
    data.forEach((item) => {
      const node = map.get(item.menu_Id);

      if (item.parent_Id === null || item.parent_Id === 0) {
        // 第一層項目
        tree.push(node);
      } else {
        // 子項目：將自己放入父層的 items 中
        const parent = map.get(item.parent_Id);
        if (parent) {
          parent.items.push(node);
        }
      }
    });

    // 4. 清理沒有子項目的 items 屬性 (PrimeNG 如果 items 是空的會顯示箭頭)
    const cleanEmptyItems = (nodes: any[]) => {
      nodes.forEach((node) => {
        if (node.items.length === 0) {
          delete node.items;
        } else {
          cleanEmptyItems(node.items);
        }
      });
    };

    cleanEmptyItems(tree);
    return tree;
  }
}

interface SysMenuRaw {
  menu_Id: number;
  parent_Id: number | null;
  label: string;
  icon: string;
  routerLink: string | null;
  sort_Order: number;
}
