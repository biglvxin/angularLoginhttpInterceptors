import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegulatoryCoverageComponent } from './regulatory-coverage.component';


const routes: Routes = [
  {
    path: '',
    component: RegulatoryCoverageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulatoryCoverageRoutingModule { }
