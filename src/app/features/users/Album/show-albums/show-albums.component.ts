import { Component, inject, model, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/imports/shared.imports';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { FORM_IMPORTS } from '../../../../shared/imports/form.imports';
import { ApiService } from '../../../../core/api.service';

@Component({
  selector: 'app-show-albums',
  imports: [...SHARED_IMPORTS, ...FORM_IMPORTS],
  templateUrl: './show-albums.component.html',
  styleUrl: './show-albums.component.css',
  providers: [MessageService],
})
export class ShowAlbumsComponent {
  private apiService = inject(ApiService);
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

    // 由DB取得相簿menu
    this.apiService.postAlbumGroupData().subscribe((res: any) => {
      const AlbumGroupRawData: AlbumGroupRaw[] = res.message.result;
      // 開始生成群組
      // console.log(res.message.result);
      this.files.set(this.transformToTree(AlbumGroupRawData));
    });

    // this.files = signal<TreeNode[]>([
    //   {
    //     key: '0',
    //     label: 'Documents',
    //     data: 'Documents Folder',
    //     icon: 'pi pi-fw pi-inbox',
    //     children: [
    //       {
    //         key: '0-0',
    //         label: 'Work',
    //         icon: 'pi pi-fw pi-cog',
    //         data: 'Work Folder',
    //       },
    //       {
    //         key: '0-1',
    //         label: 'Home',
    //         icon: 'pi pi-fw pi-home',
    //         data: 'Home Folder',
    //       },
    //     ],
    //   },
    //   {
    //     key: '1',
    //     label: 'Images',
    //     data: 'Images Folder',
    //     icon: 'pi pi-fw pi-image',
    //     children: [
    //       {
    //         key: '1-0',
    //         label: 'logo.png',
    //         icon: 'pi pi-fw pi-file',
    //         data: 'Logo Image',
    //       },
    //     ],
    //   },
    // ]);
  }

  transformToTree(data: AlbumGroupRaw[]): TreeNode[] {
    const map = new Map<number, TreeNode>();
    const tree: TreeNode[] = [];

    // 步驟 1 & 2: 建立 Map 並轉換物件結構
    data.forEach((item) => {
      map.set(item.group_Id, {
        label: item.group_Name?.trim(), // 順便處理 trim
        icon: item.icon,
        children: [], // 注意：PrimeNG Tree 通常使用 'children' 而非 'items'
        data: item, // 建議把原始資料存入 data，方便後續點擊時取用
      });
    });

    // 步驟 3: 建立階層
    data.forEach((item) => {
      const node = map.get(item.group_Id)!;
      if (!item.parent_Id || item.parent_Id === 0) {
        tree.push(node);
      } else {
        const parent = map.get(item.parent_Id);
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(node);
        } else {
          // 如果找不到父節點，可能資料有誤，通常作為根節點處理
          tree.push(node);
        }
      }
    });
    console.log('tree_BEFORE: ', tree);
    // 步驟 4: 遞迴清理空子項目
    this.removeEmptyChildren(tree);
    console.log('tree_AFTER: ', tree);
    return tree;
  }

  private removeEmptyChildren(nodes: TreeNode[]) {
    nodes.forEach((node) => {
      if (node.children && node.children.length === 0) {
        delete node.children;
      } else if (node.children) {
        this.removeEmptyChildren(node.children);
      }
    });
  }

  nodeSelectOnLeftClick(event: any) {
    // 左鍵點擊相簿時
    this.updateTreeIcons(this.files(), event.node);
  }
  nodeUnselect(event: any) {
    this.updateTreeIcons(this.files(), null);
  }

  private updateTreeIcons(nodes: TreeNode[], selectedNode: TreeNode | null) {
    if (!nodes) return;

    nodes.forEach((node) => {
      // 邏輯：如果是目前選中的節點，給 open，否則給 folder
      if (node === selectedNode) {
        node.icon = 'pi pi-folder-open';
      } else {
        node.icon = 'pi pi-folder';
      }

      // 如果有子節點，遞迴下去處理
      if (node.children && node.children.length > 0) {
        this.updateTreeIcons(node.children, selectedNode);
      }
    });

    // 重要：因為 Signal 是偵測物件參照，我們需要通知 Signal 資料已改變
    // 使用 .update() 觸發 UI 重新渲染
    this.files.update((currentNodes) => [...currentNodes]);
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

interface AlbumGroupRaw {
  group_Id: number;
  parent_Id: number | null;
  group_Name: string;
  icon: string;
  sort_Order: number;
}
