import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  public o1: Observable<any> = of(1);
  public o2: Observable<any> = of(2);
  public o3: Observable<any> = of(3);
  public o4: Observable<any> = of(4);
  public o5: Observable<any> = of(5);
}

@Component({
  selector: 'app-subsink',
  template: ``,
  styleUrls: [],
})
export class DummyComponent implements OnInit, OnDestroy {

  private o1Subscription: Subscription;
  private o2Subscription: Subscription;
  private o3Subscription: Subscription;
  private o4Subscription: Subscription;
  private o5Subscription: Subscription;

  constructor(private dummy: DummyService) {
  }

  ngOnInit(): void {
    this.o1Subscription = this.dummy.o1.subscribe(console.log);
    this.o2Subscription = this.dummy.o2.subscribe(console.log);
    this.o3Subscription = this.dummy.o3.subscribe(console.log);
    this.o4Subscription = this.dummy.o4.subscribe(console.log);
    this.o5Subscription = this.dummy.o5.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.o1Subscription.unsubscribe();
    this.o2Subscription.unsubscribe();
    this.o3Subscription.unsubscribe();
    this.o4Subscription.unsubscribe();
    this.o5Subscription.unsubscribe();
  }

}

@Component({
  selector: 'app-subsink',
  template: ``,
  styleUrls: [],
})
export class Dummy2Component implements OnInit, OnDestroy {

  private subs: SubSink;

  constructor(private dummy: DummyService) {
  }

  ngOnInit(): void {
    this.subs.add(
      this.dummy.o1.subscribe(console.log),
      this.dummy.o2.subscribe(console.log),
      this.dummy.o3.subscribe(console.log),
      this.dummy.o4.subscribe(console.log),
      this.dummy.o5.subscribe(console.log),
    );

    // Or
    this.subs.sink = this.dummy.o1.subscribe(console.log);
    this.subs.sink = this.dummy.o2.subscribe(console.log);
    this.subs.sink = this.dummy.o3.subscribe(console.log);
    this.subs.sink = this.dummy.o4.subscribe(console.log);
    this.subs.sink = this.dummy.o5.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
