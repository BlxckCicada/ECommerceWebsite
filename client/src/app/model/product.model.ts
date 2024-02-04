export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: InStock;
}

export enum InStock {
  no,
  yes,
}
