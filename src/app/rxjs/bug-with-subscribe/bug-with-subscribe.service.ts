import { interval, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugWithSubscribeService {

  public get(int: number): Observable<number> {
    return interval(int);
  }

}
