import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loading = true;
  productos!: Promise<Producto[]>;

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getAll();
  }
  handleReload() {
    console.log('handleReload');
    this.productos = this.productosService.getAll();
  }
}
