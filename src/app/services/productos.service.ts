import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import {
  Producto,
  ResponseDetalleDescription,
  ResponseProductos,
} from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<Producto[]> {
    return lastValueFrom(
      this.http
        .get<ResponseProductos>(
          'https://api.mercadolibre.com/sites/MLA/search?q=placas-de-sonido'
        )
        .pipe(map((response: ResponseProductos) => response.results))
    );
  }
  getById(id: string): Promise<Producto> {
    return lastValueFrom(
      this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}/`)
    );
  }
  getByIdDescription(id: string): Promise<string> {
    return lastValueFrom(
      this.http
        .get<ResponseDetalleDescription>(
          `https://api.mercadolibre.com/items/${id}/description`
        )
        .pipe(
          map((response: ResponseDetalleDescription) => response.plain_text)
        )
    );
  }
  create(payload: any) {
    return this.http.post(
      'https://api.mercadolibre.com/sites/MLA/search?q=placas-de-sonido',
      payload
    );
  }
  update(id: string, payload: any) {
    return this.http.post(
      `https://api.mercadolibre.com/sites/MLA/search?q=placas-de-sonido${id}`,
      payload
    );
  }
  delete(id: string) {
    return this.http.delete(
      `https://api.mercadolibre.com/sites/MLA/search?q=placas-de-sonido${id}`
    );
  }
}
