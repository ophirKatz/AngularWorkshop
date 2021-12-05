import { CustomerDataService } from './../customer-data.service';
import { Customer, CustomerDetails } from './../customer';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnChanges {

  @Input() customer: Customer;
  public customerDetails$: Promise<CustomerDetails>;

  constructor(
    private customerDataService: CustomerDataService,
  ) {
  }

  ngOnChanges(_: SimpleChanges): void {
    this.customerDetails$ = this.customerDataService.getCustomerDetails(this.customer?.id);
  }

}
