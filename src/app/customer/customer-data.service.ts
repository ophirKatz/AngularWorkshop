import { Customer } from './customer';
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
        }
      },
      {
        id: 2,
        name: 'D.J. Daniel L.',
        stars: 50,
        address: {
          address: 'Yokneam',
          defaultShippingAddress: 'Haifa'
        }
      },
      {
        id: 3,
        name: 'Daniel K.',
        stars: 0,
        address: {
          address: 'Hadera',
          defaultShippingAddress: 'Hadera'
        }
      },
      {
        id: 4,
        name: 'Daniel S.',
        stars: 5,
        address: {
          address: 'K. Motzkin',
          defaultShippingAddress: 'K. Motzkin'
        }
      },
    ];
    return of(customers);
  }

}
