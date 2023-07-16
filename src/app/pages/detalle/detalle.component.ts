import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  producto!: Producto;
  description!: string;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(
      '🚀 ~ file: detalle.component.ts:12 ~ DetalleComponent ~ constructor ~ id:',
      id
    );
    if (id) {
      this.init(id);
    }
  }
  async init(id: string) {
    try {
      this.producto = await this.productosService.getById(id);
      this.description = await this.productosService.getByIdDescription(id);
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  }
}
