import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public getUserDisplayName(): string {
    return 'Ophir';
  }

}