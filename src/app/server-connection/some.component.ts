import { IServerConnection, SERVER_CONNECTION } from './server-connection';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-some',
  template: `
    <p>Server Connection Established<p>
  `
})
export class SomeComponent {
  constructor(
    @Inject(SERVER_CONNECTION) serverConnection: IServerConnection
  ) { }
}
