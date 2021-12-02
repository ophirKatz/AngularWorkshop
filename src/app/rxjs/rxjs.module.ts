import { DummyComponent } from './subsink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';



@NgModule({
  declarations: [
    ObservablesComponent,
    DummyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObservablesComponent
  ]
})
export class RxjsModule { }
