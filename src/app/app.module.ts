import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SuperDuperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TODO : Import OrdersModule
    // LoggingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
