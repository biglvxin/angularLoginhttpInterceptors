import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutionComponent } from './execution.component';


const routes: Routes = [
  {
    path: 'execution-home',
    component: ExecutionComponent,
    children: [
      {
        path: 'execution-list',
        loadChildren: './modules/execution-list/execution-list.module#ExecutionListModule'
      },
      {
        path: 'execution-details',
        loadChildren: './modules/execution-details/execution-details.module#ExecutionDetailsModule'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'execution-home/execution-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionRoutingModule { }
