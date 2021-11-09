import { Customer } from './../customer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';

// TODO 1 : Add a subscription
// TODO 2 : Use async pipe to avoid explicitly subscribing and unsubscribing

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.css']
})
export class CustomersDashboardComponent implements OnInit, OnDestroy {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerDataService) { }

  ngOnInit(): void {
    // TODO : Missing a Subscription
    this.customerService.customers$.subscribe(
      (cs: Customer[]) => {
        this.customers = cs;
        this.selectedCustomer = cs[1];
      }
    );
  }

  ngOnDestroy(): void {
    // ???
  }

  onCustomerSelected(c: Customer): void {
    console.log('Selected customer');
    this.selectedCustomer = c;
  }

}
