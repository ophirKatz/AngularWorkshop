import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsFacadeService {

  constructor(
    private readonly userDataService: UserDataService
  ) { }

  // Only expose the needed services
  public async getUserDetails(): Promise<UserDetails> {
    return await this.userDataService.getUserDetails();
  }

}
