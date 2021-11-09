import { ILogger, LOGGER } from './logger';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProxyService implements ILogger {

  constructor(@Inject(LOGGER) private logger: ILogger[]) { }

  log(msg: string): void | Promise<void> {
    for (const logger of this.logger) {
      const r = logger.log(msg);
      return Promise.resolve(r);
    }
  }
}
