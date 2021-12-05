import { DummyComponent } from './subsink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';
import { BugWithSubscribeComponent } from './bug-with-subscribe/bug-with-subscribe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ObservablesComponent,
    DummyComponent,
    BugWithSubscribeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ObservablesComponent
  ]
})
export class RxjsModule { }
