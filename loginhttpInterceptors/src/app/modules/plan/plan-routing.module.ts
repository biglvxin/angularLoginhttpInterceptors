import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './plan.component';
import { ProcedureDetailsRoutingModule } from './modules/procedure-details/procedure-details-routing.module';


const routes: Routes = [
  {
    path: 'plan-home',
    component: PlanComponent,
    children: [
      {
        path: 'procedure-list',
        loadChildren: './modules/procedure-list/procedure-list.module#ProcedureListModule',
      },
      {
        path: 'procedure-details',
        loadChildren: './modules/procedure-details/procedure-details.module#ProcedureDetailsModule',
      },
      {
        path: 'entity-list',
        loadChildren: './modules/entity-list/entity-list.module#EntityListModule',
      },
      {
        path: 'policy-coverage',
        loadChildren: './modules/policy-coverage/policy-coverage.module#PolicyCoverageModule',
      },
      {
        path: 'regulatory-coverage',
        loadChildren: './modules/regulatory-coverage/regulatory-coverage.module#RegulatoryCoverageModule',
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'plan-home/procedure-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
