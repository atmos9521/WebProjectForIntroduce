import { Component, inject, model, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/imports/shared.imports';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { FORM_IMPORTS } from '../../../../shared/imports/form.imports';

@Component({
  selector: 'app-show-albums',
  imports: [...SHARED_IMPORTS, ...FORM_IMPORTS],
  templateUrl: './show-albums.component.html',
  styleUrl: './show-albums.component.css',
  providers: [MessageService],
})
export class ShowAlbumsComponent {
  private messageService = inject(MessageService);
  files = signal<TreeNode[]>([]);
  selectedNode!: TreeNode;
  contextMenuNode: any = model<TreeNode | null>(null);
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: () => {
          // 1. 取得目前的右鍵選取節點
          const node = this.contextMenuNode();

          // 2. 判斷是否存在且具備 key (或 id)
          if (node && node.key) {
            this.viewFile(node.key); // 帶入 ID
          }
        },
      },
      {
        label: 'Toggle',
        icon: 'pi pi-sort',
        command: () => {
          // 1. 取得目前的右鍵選取節點
          const node = this.contextMenuNode();

          // 2. 判斷是否存在且具備 key (或 id)
          if (node && node.key) {
            this.viewFile(node.key); // 帶入 ID
          }
        },
      },
    ];

    this.files = signal<TreeNode[]>([
      {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Work',
            icon: 'pi pi-fw pi-cog',
            data: 'Work Folder',
          },
          {
            key: '0-1',
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            data: 'Home Folder',
          },
        ],
      },
      {
        key: '1',
        label: 'Images',
        data: 'Images Folder',
        icon: 'pi pi-fw pi-image',
        children: [
          {
            key: '1-0',
            label: 'logo.png',
            icon: 'pi pi-fw pi-file',
            data: 'Logo Image',
          },
        ],
      },
    ]);
  }

  viewFile(id: string | undefined) {
    if (!id) return;

    console.log('正在查詢 ID:', id);
  }

  toggleFile(id: string | undefined) {
    if (!id) return;

    console.log('正在查詢 ID:', id);
  }

  onRightClick(event: any) {
    // event.node 就是你右鍵點擊的那個節點
    // 使用 .set() 來更新你的 model signal
    this.contextMenuNode.set(event.node);
  }
}
