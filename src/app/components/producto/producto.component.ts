import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  @Input()
  data!: Producto;

  @Output()
  reload = new EventEmitter();
  isLogin = false;
  constructor(private auth: AuthService) {
    this.auth.isAuthenticate().subscribe((value) => {
      this.isLogin = value;
    });
  }
  eliminar() {
    this.reload.emit();
  }
}
