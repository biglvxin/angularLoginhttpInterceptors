import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignDetailsComponent } from './design-details.component';


const routes: Routes = [
  {
    path: '',
    component: DesignDetailsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignDetailsRoutingModule { }
