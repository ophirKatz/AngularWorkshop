import { AuthModule } from './auth/auth.module';
import { RoutingModule } from './routing/routing.module';
import { TemplateSelectionModule } from './template-selection/template-selection.module';
import { FacadeModule } from './facade/facade.module';
import { CssPatternsModule } from './css-patterns/css-patterns.module';
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
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentOverviewModule,
    InheritanceModule,
    ChangeDetectionModule,
    PipesAndDirectivesModule,
    RxjsModule,
    StateManagementModule,
    ServerConnectionModule,
    CssPatternsModule,
    FacadeModule,
    TemplateSelectionModule,
    RoutingModule,
    AuthModule,

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
