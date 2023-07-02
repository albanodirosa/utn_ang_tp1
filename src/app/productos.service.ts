import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http
      .get('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
      .pipe(map((response: any) => response.results));
  }
  create(payload: any) {
    return this.http.post(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod',
      payload
    );
  }
  update(id: string, payload: any) {
    return this.http.post(
      `https://api.mercadolibre.com/sites/MLA/search?q=ipod${id}`,
      payload
    );
  }
  delete(id: string) {
    return this.http.delete(
      `https://api.mercadolibre.com/sites/MLA/search?q=ipod${id}`
    );
  }
}
