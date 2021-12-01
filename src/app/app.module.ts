import { PipesAndDirectivesModule } from './pipes-and-directives/pipes-and-directives.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InheritanceModule } from './inheritance/inheritance.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ComponentOverviewModule } from './component-overview/component-overview.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentOverviewModule,
    InheritanceModule,
    ChangeDetectionModule,
    PipesAndDirectivesModule,

    // TODO : Import OrdersModule
    // LoggingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
