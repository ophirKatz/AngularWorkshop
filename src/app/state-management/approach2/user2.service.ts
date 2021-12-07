import { Injectable } from '@angular/core';

@Injectable()
export class User2Service {

  // This is the state
  public userDisplayName: string;

  constructor() {
    this.userDisplayName = 'Ophir';
  }

}

