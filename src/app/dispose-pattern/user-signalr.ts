import { SignalRServerConnection } from './../server-connection/signalr-server-connection';
import { Disposable, using } from 'using-statement';
import { IServerConnection } from '../server-connection/server-connection';

export function disposeBy(action: () => void): Disposable {
  return {
    dispose: action
  };
}

// Without dispose
{
  const connection = new SignalRServerConnection({ url: 'http://localhost:5001/api' });
  connection.registerToServerEvent('SomeMethod', (p) => console.log(p));

  // React to event, do some stuff...

  // In the scope of the unregister, we still know we're dealing with a server connection
  connection.unregisterFromServerEvent('SomeMethod');
}


// With dispose
{
  const connection = new SignalRServerConnection({ url: 'http://localhost:5001/api' });
  connection.registerToServerEvent('SomeMethod', (p) => console.log(p));
  const d = disposeBy(() => connection.unregisterFromServerEvent('SomeMethod'));

  using(d, _ => { // The fact that its related to a server connection is abstracted away in the scope of the disposal

    // React to event, do some stuff...

  });
  // After this line, the client is not registered to the event.
}
