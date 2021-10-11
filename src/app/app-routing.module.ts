import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    pathMatch: 'full',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'customer',
    pathMatch: 'full',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  // TODO : Add a default route to order
  // Default Route (Remove, leave for exercise)
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'order'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
