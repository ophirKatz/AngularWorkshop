import { User2Service } from './user2.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stateful2',
  template: `
    <p>2: Hello, {{userDisplayName}}</p>
  `
})
export class Stateful2Component {

  // This is just a holder
  public userDisplayName: string;

  constructor(userService: User2Service) {
    this.userDisplayName = userService.userDisplayName;
  }

}

