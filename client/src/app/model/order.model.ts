import { Product } from '.';

export interface Order {
  id: string;
  customerId: string;
  products: Product[];
  totalPrice: number;
  status: OrderStatus;
}

export enum OrderStatus {
  new,
  pending,
  paid,
  shipped,
  delivered,
}
