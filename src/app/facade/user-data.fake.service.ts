import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserDetails } from './user-details';

@Injectable()
// A general CRUD service over the network
// Notice it's exposing two methods
export class FakeUserDataService extends UserDataService {

  public async getUserDetails(): Promise<UserDetails> {
    return await Promise.resolve({
      name: 'Ophir',
      username: 'ophirkatz',
      email: 'ofirkatz@rafael'
    });
  }

  public deleteUser(id: string): void {
    return;
  }

}
