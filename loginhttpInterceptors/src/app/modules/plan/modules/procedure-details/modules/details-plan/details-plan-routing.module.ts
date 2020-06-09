import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPlanComponent } from './details-plan.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsPlanComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPlanRoutingModule { }
