import { ServerConnectionModule } from './server-connection/server-connection.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { ENV, environment } from './../environments/environment';
import { PipesAndDirectivesModule } from './pipes-and-directives/pipes-and-directives.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InheritanceModule } from './inheritance/inheritance.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ComponentOverviewModule } from './component-overview/component-overview.module';
import { OrderModule } from './order/order.module';
import { StateManagementModule } from './state-management/state-management.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentOverviewModule,
    InheritanceModule,
    ChangeDetectionModule,
    PipesAndDirectivesModule,
    RxjsModule,
    StateManagementModule,
    ServerConnectionModule,

    OrderModule
    // LoggingModule
  ],
  providers: [
    {
      provide: ENV,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
