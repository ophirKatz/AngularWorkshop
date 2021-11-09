import { Observable } from 'rxjs';
import { CustomerDataService } from './customer-data.service';
import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerJsonDataService extends CustomerDataService {

  constructor(private http: HttpClient) {
    super();
    console.log('This is the CustomerJsonDataService');
  }

  protected fetchData(): Observable<Customer[]> {
    return this.http.get<Customer[]>('data/customers.json');
  }
}
