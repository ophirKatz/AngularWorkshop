import { OrdersListComponent } from './orders-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrdersListComponent],
  imports: [
    CommonModule
  ],
  exports: [OrdersListComponent]
})
export class OrdersListModule { }
