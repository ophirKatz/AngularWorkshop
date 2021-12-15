import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { NewOrderDialogComponent } from './new-order-dialog/new-order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductDashboardComponent, NewOrderDialogComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDialogModule,
    FormsModule,

  ]
})
export class ProductModule { }
