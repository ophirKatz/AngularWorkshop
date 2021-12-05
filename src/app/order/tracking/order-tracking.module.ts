import { RxJsOrderTrackingService } from './rxjs-order-tracking.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTrackingComponent } from './order-tracking.component';
import { ORDER_TRACKING } from './order-tracking-service';



@NgModule({
  declarations: [OrderTrackingComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: ORDER_TRACKING,
      useClass: RxJsOrderTrackingService
    }
  ],
  exports: [OrderTrackingComponent]
})
export class OrderTrackingModule { }
