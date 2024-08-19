export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  cart: string[];
  favorites: string[];
  materials: any[];
}

export interface Product {
  id: string;
  name: string;
  code: string | null;
  price: Price;
  image: Image;
  material: number;
}

export interface Price {
  old_price: number | null;
  current_price: number;
}

export interface Image {
  url: string;
}
