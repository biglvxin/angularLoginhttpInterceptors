import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutionListComponent } from './execution-list.component';


const routes: Routes = [
  {
    path: '',
    component: ExecutionListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionListRoutingModule { }
