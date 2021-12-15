import { OrderDataService } from './../order-data.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];

  constructor(
    private ordersService: OrderDataService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.ordersService.orders$.subscribe(x => this.orders = x);
  }

  onOrderClicked(e): void {
    console.log(e);
  }

  public trackOrder(orderId: number): void {
    this.router.navigate(['track/' + orderId]);
  }

}


