import { GlobalService } from './../../shared/global.service';
import { OrderDataService } from './../order-data.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];

  constructor(
    private ordersService: OrderDataService
  ) {

  }

  ngOnInit(): void {
    this.orders = this.ordersService.orders;
  }

  onOrderClicked(e): void {
    console.log(e);
  }

}


