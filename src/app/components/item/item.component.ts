import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ItemComponent {
  @Input() item: { name: string; bought: boolean } | undefined;
  @Input() index: number | undefined;

  @Output() remove = new EventEmitter<number>();
  @Output() toggleBought = new EventEmitter<number>();

  itemName: string = ''; // Nova propriedade para armazenar o nome do item

  ngOnInit() {
    if (this.item) {
      this.itemName = this.item.name; // Inicializa itemName com o valor do item
    }
  }

  editName(newName: string) {
    if (this.item) {
      this.item.name = newName; // Atualiza diretamente o objeto item
    }
  }

  onRemove() {
    if (this.index !== undefined) {
      this.remove.emit(this.index);
    }
  }

  onToggleBought() {
    if (this.index !== undefined) {
      this.toggleBought.emit(this.index);
    }
  }
}