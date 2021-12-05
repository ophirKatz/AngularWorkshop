import { BugWithSubscribeService } from './bug-with-subscribe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-with-subscribe',
  template: `
    <input [(ngModel)]="interval"/>
    <button (click)="addNumbers()">Add numbers every interval</button>
    <p *ngFor="let x of numbers">{{x}}</p>
  `
})
export class BugWithSubscribeComponent implements OnInit {

  public interval: number;
  public numbers: number[] = [];

  constructor(private service: BugWithSubscribeService) { }

  ngOnInit(): void {
  }

  public addNumbers(): void {
    this.service.get(this.interval).subscribe(x => {
      this.numbers.unshift(x);
    });
  }

}
