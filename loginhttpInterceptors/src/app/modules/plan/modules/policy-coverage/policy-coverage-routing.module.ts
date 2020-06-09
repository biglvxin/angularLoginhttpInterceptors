import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyCoverageComponent } from './policy-coverage.component';


const routes: Routes = [
  {
    path: '',
    component: PolicyCoverageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyCoverageRoutingModule { }
