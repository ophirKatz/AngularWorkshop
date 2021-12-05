import { filter, map, take } from 'rxjs/operators';
import { IOrderTrackingService } from './order-tracking-service';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { OrderProgress } from './order-progress';

@Injectable()
export class RxJsOrderTrackingService implements IOrderTrackingService {

  trackProgress(orderId: number): Observable<OrderProgress> {
    return interval(1000).pipe(
      take(100),
      map((progress: number) => progress * 5),
      filter(x => x <= 100),
      map((progress: number) => {
        const orderProgress: OrderProgress = {
          orderId,
          progress
        };

        return orderProgress;
      })
    );
  }

}
