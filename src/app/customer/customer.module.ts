import { CustomerDashboardModule } from './dashboard/customer-dashboard.module';
import { CustomerDataService } from './customer-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  providers: [
    CustomerDataService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomerRoutingModule,
    CustomerDashboardModule
  ]
})
export class CustomerModule { }
