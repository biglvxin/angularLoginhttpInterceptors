import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsDesignComponent } from './details-design.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsDesignComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDesignRoutingModule { }
