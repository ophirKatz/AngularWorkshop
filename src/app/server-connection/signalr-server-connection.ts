import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { IServerConnection } from './server-connection';

export type SignalRConnectionDetails = {
  url: string;
};

export class SignalRServerConnection implements IServerConnection {

  private hubConnection: HubConnection;

  constructor(details: any) {
    const signalRDetails = details as SignalRConnectionDetails;
    // You could also get these values from configuration
    this.hubConnection = new HubConnectionBuilder()
      .configureLogging(LogLevel.Debug)
      .withUrl(signalRDetails.url, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection.onclose(() => {
      console.log('Connection was closed');
    });
  }

  public async start(): Promise<void> {
    await this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public stop(): void {
    this.hubConnection.stop();
  }

  public registerToServerEvent(methodName: string, newMethod: (...args: any[]) => void): void {
    this.hubConnection.on(methodName, newMethod);
  }

  public unregisterFromServerEvent(methodName: string): void {
    this.hubConnection.off(methodName);
  }

  public send(methodName: string, ...args: any[]): void {
    this.hubConnection.send(methodName, ...args);
  }

  public receive(methodName: string): Promise<void> {
    return this.hubConnection.invoke(methodName);
  }

  public sendAndReceive<T>(methodName: string, ...args: any[]): Promise<T> {
    return this.hubConnection.invoke(methodName, ...args);
  }

}
