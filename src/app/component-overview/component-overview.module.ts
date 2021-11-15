import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperDuperComponent } from './super-duper.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuperDuperComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SuperDuperComponent]
})
export class ComponentOverviewModule { }
