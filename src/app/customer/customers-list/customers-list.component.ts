import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  @Input() customers: Customer[];
  @Output() customerSelected: EventEmitter<Customer> = new EventEmitter<Customer>(null);

  constructor() { }

  onCustomerSelected(c: Customer): void {
    this.customerSelected.emit(c);
  }

}
