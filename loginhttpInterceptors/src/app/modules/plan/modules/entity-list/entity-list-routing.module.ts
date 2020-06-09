import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list.component';


const routes: Routes = [
  {
    path: '',
    component: EntityListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityListRoutingModule { }
