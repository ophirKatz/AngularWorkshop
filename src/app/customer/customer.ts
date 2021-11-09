import { Product } from './../product/product';
export interface Customer {
  id: number;
  name: string;
  stars: number;
  address?: CustomerAddress;
  memberSince: Date;
}

export interface CustomerAddress {
  address: string;
  defaultShippingAddress: string;
}

export interface ProductOrderDetails {
  product: Product;
  amount: number;
}

export interface CustomerDetails {
  totalOrders: number;
  mostOrderedProduct: ProductOrderDetails;
}
