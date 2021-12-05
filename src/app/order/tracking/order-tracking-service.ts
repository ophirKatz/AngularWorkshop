import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProgress } from './order-progress';

export interface IOrderTrackingService {
  trackProgress(orderId: number): Observable<OrderProgress>;
}

// TODO : Create injection token for IOrderTrackingService
export const ORDER_TRACKING: InjectionToken<IOrderTrackingService> =
  new InjectionToken<IOrderTrackingService>('ORDER_TRACKING_SERVICE');

