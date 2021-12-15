import { OrderDataService } from './../order/order-data.service';
import { Injectable } from '@angular/core';
import { Order } from '../order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderFacadeService {

  constructor(private orderService: OrderDataService) { }

  public addOrder(order: Order): void {
    this.orderService.addOrder(order);
  }
}
