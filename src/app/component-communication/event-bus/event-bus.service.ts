import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Need to specify each event in the global context, no separation
export enum EventType {
  SelectedCustomerChanged,
}

// Global event-bus for all application events
@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  // Missing a type for subject because of the genericity
  // What if we want to have a default value (BehaviorSubject)
  private events: Map<EventType, Subject<any>> = new Map();

  constructor() {
    this.events[EventType.SelectedCustomerChanged] = new Subject();
  }


  // Using unsafe casting
  public register<T>(eventType: EventType): Observable<T> {
    const subject = this.events[eventType] as Subject<T>;
    return subject;
  }

  public emit<T>(eventType: EventType, data: T): void {
    const subject = this.events[eventType] as Subject<T>;
    subject.next(data);
  }

}
