import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loading = true;
  productos: any = [];

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getAll();
  }

  filtrar() {
    this.productos = [
      {
        id: 2,
        title: 'moto Z',
      },
    ];
  }
}
