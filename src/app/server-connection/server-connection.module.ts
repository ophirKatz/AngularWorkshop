import { SomeComponent } from './some.component';
import { SignalRServerConnection, SignalRConnectionDetails } from './signalr-server-connection';
import { SERVER_CONNECTION } from './server-connection';
import { NgModule } from '@angular/core';

const details: SignalRConnectionDetails = {
  url: 'http://localhost:5001/ServerHub'
};

@NgModule({
  declarations: [SomeComponent],
  providers: [
    {
      provide: SERVER_CONNECTION,
      // Can use factory provider instead for more complex creation
      // Or even a specified service to create it dynamically (for multiple connections)
      useValue: new SignalRServerConnection(details)
    }
  ],
  exports: [SomeComponent],
})
export class ServerConnectionModule { }
