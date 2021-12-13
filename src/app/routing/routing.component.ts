import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
})
export class RoutingComponent {

  // public x = '1';

  constructor(router: Router) {
    // setTimeout(() => router.navigate(['/one']), 1000);
  }

  // public increaseParam(): void {
  //   this.x = String(Number(this.x) + 1);
  // }
}
