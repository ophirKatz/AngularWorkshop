import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tracking',
  templateUrl: './order-tracking.component.html'
})
export class OrderTrackingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const orderId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const orderId = Number(params.get('id'));
        return orderId;
      }),
    );

    // TODO : Something with orderId$
  }

}
