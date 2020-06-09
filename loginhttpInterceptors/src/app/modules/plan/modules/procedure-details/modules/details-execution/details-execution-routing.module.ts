import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsExecutionComponent } from './details-execution.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsExecutionComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsExecutionRoutingModule { }
