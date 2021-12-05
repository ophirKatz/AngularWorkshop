import { OrderTrackingModule } from './tracking/order-tracking.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrdersListModule } from './orders-list/orders-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    OrdersListModule,
    OrderTrackingModule,
    OrderRoutingModule
  ],
})
export class OrderModule { }
