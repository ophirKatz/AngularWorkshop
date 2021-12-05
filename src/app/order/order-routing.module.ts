import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderTrackingComponent } from './tracking/order-tracking.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OrdersListComponent
  },
  {
    path: 'track/:id',
    pathMatch: 'full',
    component: OrderTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
