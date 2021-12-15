import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Subject<User> = new BehaviorSubject<User>(undefined);
  public readonly user$: Observable<User> = this.user;

  constructor() { }

  public saveUser(user: User): void {
    console.log('Saving user...', user);
    this.user.next(user);
  }

}