import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureDetailsComponent } from './procedure-details.component';


const routes: Routes = [
  {
    path: 'details-home',
    component: ProcedureDetailsComponent,
    children: [
      {
        path: 'plan',
        // loadChildren: './modules/details-plan/details-plan.module#DetailsPlanModule',
        loadChildren: () => import('./modules/details-plan/details-plan.module').then(m => m.DetailsPlanModule),
      },
      {
        path: 'design',
        // loadChildren: './modules/details-design/details-design.module#DetailsDesignModule',
        loadChildren: () => import('./modules/details-design/details-design.module').then(m => m.DetailsDesignModule),
      },
      {
        path: 'execution',
        // loadChildren: './modules/details-execution/details-execution.module#DetailsExecutionModule',
        loadChildren: () => import('./modules/details-execution/details-execution.module').then(m => m.DetailsExecutionModule),

      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'details-home/plan'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureDetailsRoutingModule { }
