import { User3Service } from './user3.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stateful3',
  template: `
    <p>3: Hello, {{userDisplayName}}</p>
  `
})
export class Stateful3Component {

  // This is just a holder
  public userDisplayName: string;

  constructor(userService: User3Service) {
    // Subscribe and Unsubscribe in OnDestroy
    userService.userDisplayName$.subscribe(displayName => {
      this.userDisplayName = displayName;
    });
  }
}

