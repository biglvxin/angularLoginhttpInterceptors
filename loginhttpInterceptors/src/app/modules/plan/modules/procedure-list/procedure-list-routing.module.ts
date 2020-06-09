import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureListComponent } from './procedure-list.component';


const routes: Routes = [
  {
    path: '',
    component: ProcedureListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureListRoutingModule { }
