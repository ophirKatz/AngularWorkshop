import { FileLogger, HttpLogger } from '../app.module';
import { NgModule } from '@angular/core';
import { LOGGER } from './logger';

@NgModule({
  providers: [
    {
      provide: LOGGER,
      useClass: FileLogger,
      multi: true
    },
    {
      provide: LOGGER,
      useClass: HttpLogger,
      multi: true,
    },
  ],
})
export class LoggingModule { }
