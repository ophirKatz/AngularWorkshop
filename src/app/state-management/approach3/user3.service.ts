import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class User3Service {

  // This subject is the state
  private userDisplayName: Subject<string>
    = new BehaviorSubject<string>('Ophir');
  public userDisplayName$: Observable<string>
    = this.userDisplayName;

  public updateDisplayName(newName: string): void {
    this.userDisplayName.next(newName);
  }

}

