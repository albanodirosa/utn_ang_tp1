interface Picture {
  id: string;
  url: string;
}

export interface Producto {
  id: string;
  site_id: string;
  title: string;
  seller_id: number | string;
  category_id?: string;
  official_store_id: number;
  price: number;
  base_price: number;
  thumbnail: string;
  catalog_listing: boolean;
  pictures: Picture[];
}

export interface ResponseProductos {
  site_id: string;
  query: string;
  results: Producto[];
}

export interface ResponseDetalleDescription {
  plain_text: string;
}
