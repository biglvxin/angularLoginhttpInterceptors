import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutherticationGuardService } from './core/services/authertication-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'plan',
    loadChildren: './modules/plan/plan.module#PlanModule',
    canActivate: [AutherticationGuardService]
  },
  {
    path: 'design',
    loadChildren: './modules/design/design.module#DesignModule'
  },
  {
    path: 'execution',
    loadChildren: './modules/execution/execution.module#ExecutionModule'
  },
  {
    path: '**',
    redirectTo: 'plan/plan-home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: [AutherticationGuardService]
})
export class AppRoutingModule { }

