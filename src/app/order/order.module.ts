import { OrderRoutingModule } from './order-routing.module';
import { OrdersListModule } from './orders-list/orders-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    OrdersListModule,
    OrderRoutingModule
  ],
})
export class OrderModule { }
