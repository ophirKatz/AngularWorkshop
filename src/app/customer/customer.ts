export interface Customer {
  id: number;
  name: string;
  stars: number;
  address?: CustomerAddress;
}

export interface CustomerAddress {
  address: string;
  defaultShippingAddress: string;
}
