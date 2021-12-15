import { Product } from './../product';
import { Order } from './../../order/order';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  customerId: number;
  product: Product;
}

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.css']
})
export class NewOrderDialogComponent implements OnInit {

  public order: Order;
  public productName: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData) {
    const { customerId, product } = data;
    this.order = {
      id: 1,
      customerId,
      productId: product.id,
      amount: 0
    };
    this.productName = product.name;
  }

  ngOnInit(): void {
  }

}
