import { Component, OnInit } from '@angular/core';
import { D1SqlService, Item } from './d1-sql.service';

@Component({
  selector: 'app-d1-sql-connector',
  imports: [],
  templateUrl: './d1-sql-connector.component.html',
  styleUrl: './d1-sql-connector.component.css'
})
export class D1SqlConnectorComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = { name: '' };
  editingItem: Item | null = null;

  constructor(private d1Service: D1SqlService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.d1Service.getItems().subscribe(data => this.items = data);
  }

  addItem() {
    this.d1Service.addItem(this.newItem).subscribe(() => {
      this.newItem = { name: '' };
      this.loadItems();
    });
  }

  deleteItem(id: number) {
    this.d1Service.deleteItem(id).subscribe(() => this.loadItems());
  }

  editItem(item: Item) {
    this.editingItem = { ...item };
  }

  updateItem() {
    if (this.editingItem && this.editingItem.id) {
      this.d1Service.updateItem(this.editingItem.id, this.editingItem).subscribe(() => {
        this.editingItem = null;
        this.loadItems();
      });
    }
  }
}
