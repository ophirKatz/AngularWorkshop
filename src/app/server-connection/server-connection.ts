import { InjectionToken } from '@angular/core';

export interface IServerConnection {
  start(): Promise<void>;

  stop(): void;

  registerToServerEvent(methodName: string, newMethod: (...args: any[]) => void): void;

  unregisterFromServerEvent(methodName: string): void;

  send(methodName: string, ...args: any[]): void;

  receive(methodName: string): Promise<void>;

  sendAndReceive<T>(methodName: string, ...args: any[]): Promise<T>;
}

export const SERVER_CONNECTION: InjectionToken<IServerConnection> =
  new InjectionToken<IServerConnection>('SERVER_CONNECTION');
