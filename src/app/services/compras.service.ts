import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: { name: string; bought: boolean }[] = [];

  addItem(name: string) {
    this.items.push({ name, bought: false });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleBought(index: number) {
    this.items[index].bought = !this.items[index].bought;
  }

  editItem(index: number, name: string) {
    this.items[index].name = name;
  }

  getItems() {
    return this.items;
  }
}