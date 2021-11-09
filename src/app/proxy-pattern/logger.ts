import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const LOGGER: InjectionToken<ILogger> = new InjectionToken<ILogger>('loggers');

export interface ILogger {
  log(msg: string): void | Promise<void>;
}

export class FileLogger implements ILogger {

  log(msg: string): void {
    // Write msg to file
  }

}

export class HttpLogger implements ILogger {

  constructor(private http: HttpClient) {

  }

  log(msg: string): Promise<void> {
    // Write msg to http
    return Promise.resolve();
  }

}
