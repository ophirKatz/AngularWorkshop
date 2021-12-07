import { User2Service } from './approach2/user2.service';
import { UserService } from './approach1/user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatefulComponent } from './approach1/stateful.component';
import { StateManagementComponent } from './state-management.component';
import { Stateful2Component } from './approach2/stateful2.component';
import { User3Service } from './approach3/user3.service';
import { Stateful3Component } from './approach3/stateful3.component';

@NgModule({
  declarations: [
    StateManagementComponent,
    StatefulComponent,
    Stateful2Component,
    Stateful3Component,
  ],
  providers: [
    UserService,
    User2Service,
    User3Service,
  ],
  imports: [CommonModule],
  exports: [
    StateManagementComponent,
  ]
})
export class StateManagementModule { }
