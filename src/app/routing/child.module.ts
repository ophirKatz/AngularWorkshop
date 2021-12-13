import { ThreeComponent } from './three.component';
import { FourComponent } from './four.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MatTableModule } from '@angular/material/table';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: 'three',
    pathMatch: 'full',
    component: ThreeComponent
  },
  {
    path: 'four',
    pathMatch: 'full',
    component: FourComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class ChildRoutingModule { }

