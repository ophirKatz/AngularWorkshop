import { ProductDataService } from './../product-data.service';
import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product: Product;

  constructor(
    private customerDataService: ProductDataService,
  ) {
  }

  public orderProduct(): void {
    // TODO : Order product
  }
}
