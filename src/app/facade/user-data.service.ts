import { IServerConnection, SERVER_CONNECTION } from './../server-connection/server-connection';
import { Inject, Injectable } from '@angular/core';
import { UserDetails } from './user-details';

@Injectable()
// A general CRUD service over the network, using an infrastructure service
// Notice it's exposing two methods
export class UserDataService {

  constructor(
    @Inject(SERVER_CONNECTION) private readonly serverConnection: IServerConnection
  ) { }

  public async getUserDetails(): Promise<UserDetails> {
    return await this.serverConnection.sendAndReceive<UserDetails>('GetUserDetails');
  }

  public deleteUser(id: string): void {
    this.serverConnection.send('DeleteUser', id);
  }

}
