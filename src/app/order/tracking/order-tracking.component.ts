import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, OperatorFunction } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { OrderProgress } from './order-progress';
import { IOrderTrackingService, ORDER_TRACKING } from './order-tracking-service';

export function extractId(): OperatorFunction<ParamMap, number> {
  return (source: Observable<ParamMap>) => source.pipe(
    map((params: ParamMap) => {
      const orderId = Number(params.get('id'));
      return orderId;
    })
  );
}

@Component({
  selector: 'app-tracking',
  templateUrl: './order-tracking.component.html'
})
export class OrderTrackingComponent implements OnInit, OnDestroy {

  public orderId?: number;
  public currentProgress: OrderProgress;

  private subs: SubSink = new SubSink();

  constructor(
    private route: ActivatedRoute,
    @Inject(ORDER_TRACKING) private readonly orderTracker: IOrderTrackingService
  ) { }

  ngOnInit(): void {
    const orderId$ = this.route.paramMap.pipe(
      extractId(),
      tap((orderId: number) => this.orderId = orderId),
    );

    this.subs.sink = orderId$.pipe(
      switchMap((orderId: number) => this.orderTracker.trackProgress(orderId)),
    ).subscribe((progress: OrderProgress) => {
      this.currentProgress = progress;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
