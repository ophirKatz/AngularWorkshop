import { Product } from './../product';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[];
  @Output() productSelected: EventEmitter<Product> = new EventEmitter<Product>(null);

  constructor() { }

  onProductSelected(p: Product): void {
    this.productSelected.emit(p);
  }

}
