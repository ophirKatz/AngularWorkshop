import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stateful',
  template: `
    <p>1: Hello, {{userDisplayName}}</p>
  `
})
export class StatefulComponent {

  // This is the component's state
  public userDisplayName: string;

  constructor(userService: UserService) {
    this.userDisplayName = userService.getUserDisplayName();
  }

}

