import { Observable } from 'rxjs';
import { OrderProgress } from './order-progress';

export interface IOrderTrackingService {
  trackProgress(orderId: number): Observable<OrderProgress>;
}

// TODO : Create injection token for IOrderTrackingService
