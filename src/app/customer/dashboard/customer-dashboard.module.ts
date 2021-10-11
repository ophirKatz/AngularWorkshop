import { CustomersDashboardComponent } from './customers-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListModule } from '../customers-list/customers-list.module';
import { CustomerDetailsModule } from '../details/customer-details.module';

@NgModule({
  declarations: [CustomersDashboardComponent],
  imports: [
    CommonModule,
    CustomersListModule,
    CustomerDetailsModule
  ]
})
export class CustomerDashboardModule { }
