import { NgModule } from '@angular/core';
import { FileLogger, HttpLogger, LOGGER } from './logger';

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
