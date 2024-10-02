import { Component } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ListaComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Compras';
}