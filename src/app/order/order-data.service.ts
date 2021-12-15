import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  // When the data is read from a remote and is regenerative - use observable for absent data abstraction
  // When the data is read only at request (for example, a sort/filter on a list/table) - subscribe on the observable/use a promise

  // TODO : Make readonly - think why?
  // TODO : Refactor service-Api to asynchronous
  private orders: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  public readonly orders$: Observable<Order[]> = this.orders;

  constructor() {
    const orders = [
      {
        id: 1,
        customerId: 1,
        productId: 1,
        amount: 5
      },
      {
        id: 2,
        customerId: 1,
        productId: 2,
        amount: 10
      },
      {
        id: 3,
        customerId: 4,
        productId: 2,
        amount: 8
      },
    ];

    this.orders.next(orders);
  }

  public addOrder(order: Order): void {
    const oldOrders = this.orders.getValue();
    oldOrders.unshift(order);
    this.orders.next(oldOrders);
  }
}
