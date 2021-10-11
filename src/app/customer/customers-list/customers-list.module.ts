import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list.component';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomersListComponent]
})
export class CustomersListModule { }
