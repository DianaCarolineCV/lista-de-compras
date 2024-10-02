import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ItemComponent],
})
export class ListaComponent {
  items: { name: string; bought: boolean }[] = [];
  newItemName: string = '';
  errorMessage: string = ''; 

  addItem() {
    if (this.newItemName.trim()) {
      this.items.push({ name: this.newItemName, bought: false });
      this.newItemName = '';
      this.errorMessage = ''; 
    } else {
      this.errorMessage = 'Escreva um item para adiciona-lo na lista!'; 
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000); 
    }
  }

  editItem(index: number, newName: string) {
    if (this.items[index]) {
      this.items[index].name = newName;
    }
  }

  toggleBought(index: number) {
    if (this.items[index]) {
      this.items[index].bought = !this.items[index].bought;
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}