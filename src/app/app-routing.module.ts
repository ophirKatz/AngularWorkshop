import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'order',
    pathMatch: 'full',
    component: HomeComponent,
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  },
  {
    path: 'customer',
    pathMatch: 'full',
    component: HomeComponent,
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
  },
  // TODO : Add a default route to order
  // Default Route (Remove, leave for exercise)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
