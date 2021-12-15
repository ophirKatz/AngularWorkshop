import { ProductDataService } from './../product-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  public products: Product[];
  public selectedProduct: Product;

  constructor(
    private productService: ProductDataService
  ) { }

  ngOnInit(): void {
    this.productService.customers$.subscribe((ps: Product[]) => {
      this.products = ps;
      this.selectedProduct = ps[0];
    });
  }

  public onProductSelected(p: Product): void {
    console.log('Selected product', p.id);
    this.selectedProduct = p;
  }

}
