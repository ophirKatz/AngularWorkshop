import { OrderFacadeService } from './../order-facade.service';
import { Order } from './../../order/order';
import { AuthService } from './../../auth/auth.service';
import { NewOrderDialogComponent, DialogData } from './../new-order-dialog/new-order-dialog.component';
import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product: Product;
  private userId: number;

  constructor(
    auth: AuthService,
    private orderService: OrderFacadeService,
    private dialog: MatDialog
  ) {
    auth.user$.subscribe(x => this.userId = x?.id ?? 0);
  }

  public orderProduct(): void {
    // TODO : Order product
    const dialogRef = this.dialog.open<NewOrderDialogComponent, DialogData>(NewOrderDialogComponent, {
      data: {
        customerId: this.userId,
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe((order: Order) => {
      console.log('Dialog result is', order);
      this.orderService.addOrder(order);
    });
  }
}
