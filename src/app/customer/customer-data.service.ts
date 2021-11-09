import { Customer, CustomerDetails } from './customer';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  public readonly customers$: Observable<Customer[]>;

  constructor() {
    this.customers$ = this.fetchData();
  }

  protected fetchData(): Observable<Customer[]> {
    const customers: Customer[] = [
      {
        id: 1,
        name: 'Ophir',
        stars: 10,
        address: {
          address: 'Metula',
          defaultShippingAddress: 'Hadera'
        },
        memberSince: new Date(2020, 5, 31)
      },
      {
        id: 2,
        name: 'D.J. Daniel L.',
        stars: 50,
        address: {
          address: 'Yokneam',
          defaultShippingAddress: 'Haifa'
        },
        memberSince: new Date(2019, 8, 2)
      },
      {
        id: 3,
        name: 'Daniel K.',
        stars: 0,
        address: {
          address: 'Hadera',
          defaultShippingAddress: 'Hadera'
        },
        memberSince: new Date()
      },
      {
        id: 4,
        name: 'Daniel S.',
        stars: 5,
        address: {
          address: 'K. Motzkin',
          defaultShippingAddress: 'K. Motzkin'
        },
        memberSince: new Date(2020, 10, 5)
      },
    ];
    return of(customers);
  }

  public getCustomerDetails(id: number): Promise<CustomerDetails> {
    const customerDetails: CustomerDetails = {
      totalOrders: 500 + id,
      mostOrderedProduct: {
        product: {
          id: 8,
          name: 'IPhone 13'
        },
        amount: 1400 + id
      },
    };

    return Promise.resolve(customerDetails);
  }

}

