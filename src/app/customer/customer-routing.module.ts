import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDashboardComponent } from './dashboard/customers-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CustomersDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
