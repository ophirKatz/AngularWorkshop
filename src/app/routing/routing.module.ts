import { RouteParamsComponent } from './route-params.component';
import { RoutingComponent } from './routing.component';
import { TwoComponent } from './two.component';
import { OneComponent } from './one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRoutingModule } from './child.module';

const routes: Routes = [
  // {
  //   path: 'params/:x',
  //   component: RouteParamsComponent
  // },
  {
    path: 'one',
    pathMatch: 'full',
    component: OneComponent
  },
  {
    path: 'two',
    pathMatch: 'full',
    component: TwoComponent
  },
  // {
  //   path: 'child',
  //   loadChildren: () => ChildRoutingModule
  // },
  // {
  //   path: 'child',
  //   loadChildren: () => import('./child.module').then(m => m.ChildRoutingModule)
  // }
];

@NgModule({
  declarations: [RoutingComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RoutingComponent]
})
export class RoutingModule { }

