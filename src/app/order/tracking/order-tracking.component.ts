import { OrderDataService } from './../order-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Order } from '../order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  public order: Observable<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderDataService: OrderDataService,
  ) { }

  ngOnInit(): void {
    this.order = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const order = this.orderDataService.orders.find(x => x.id === Number(params.get('id')));
        return order;
      })
    );
  }

}
