import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/customer/customer';

@Injectable({
  // Or only the context/module we use it in - can reside in that same directory (sometimes)
  providedIn: 'root'
})
export class SelectedCustomerNotificationService {

  // Notice the default value here
  private selectedCustomer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(null);
  public readonly selectedCustomer$: Observable<Customer> = this.selectedCustomer;

  // Specific naming, clear which components are the users of this
  public updateSelectedCustomer(c: Customer): void {
    // Ability to add business rules - dont allow certain customers to be published and so on.
    this.selectedCustomer.next(c);
  }

}
