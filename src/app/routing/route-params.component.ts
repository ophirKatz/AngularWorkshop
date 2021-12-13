import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-route-params',
  template: `
    <div>Route Params Example. x = {{x}}</div>
  `
})
export class RouteParamsComponent {

  public x: string;

  constructor(route: ActivatedRoute) {
    // Unsubscribe
    route.paramMap.subscribe((params: ParamMap) =>
      this.x = params.get('x'));
  }

}

