import { Product } from './product';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private productsInner$: Observable<Product[]>;

  public get customers$(): Observable<Product[]> {
    if (!this.productsInner$) {
      this.productsInner$ = this.fetchData();
    }

    return this.productsInner$;
  }

  protected fetchData(): Observable<Product[]> {
    const products: Product[] = [
      {
        id: 123,
        name: 'Iphone 13',
      },
      {
        id: 345,
        name: 'Notebook',
      },
      {
        id: 456,
        name: 'Angular Course 1000$',
      },
      {
        id: 999,
        name: 'Toothpick',
      },
    ];
    return of(products);
  }
}
