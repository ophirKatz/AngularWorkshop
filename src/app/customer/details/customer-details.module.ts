import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';

@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
