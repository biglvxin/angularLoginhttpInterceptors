import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignListComponent } from './design-list.component';


const routes: Routes = [
  {
    path: '',
    component: DesignListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignListRoutingModule { }
