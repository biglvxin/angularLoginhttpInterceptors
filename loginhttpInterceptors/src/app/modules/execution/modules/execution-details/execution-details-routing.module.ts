import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutionDetailsComponent } from './execution-details.component';


const routes: Routes = [
  {
    path: '',
    component: ExecutionDetailsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionDetailsRoutingModule { }
