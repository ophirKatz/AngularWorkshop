import { SubSink } from 'subsink';
import { OrderDataService } from './../order-data.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Order } from '../order';
import { IOrderTrackingService, ORDER_TRACKING } from './order-tracking-service';
import { OrderProgress } from './order-progress';

@Component({
  selector: 'app-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit, OnDestroy {

  public order: Order = undefined;
  public currentProgress: OrderProgress;

  private subs: SubSink = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private orderDataService: OrderDataService,
    @Inject(ORDER_TRACKING) private readonly orderTracker: IOrderTrackingService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const order = this.orderDataService.orders.find(x => x.id === Number(params.get('id')));
        return order;
      }),
      tap((order: Order) => this.order = order),
      switchMap((order: Order) => this.orderTracker.trackProgress(order.id)),
    ).subscribe((progress: OrderProgress) => {
      this.currentProgress = progress;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
