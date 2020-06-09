import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design.component';


const routes: Routes = [
  {
    path: 'design-home',
    component: DesignComponent,
    children: [
      {
        path: 'design-list',
        loadChildren: './modules/design-list/design-list.module#DesignListModule',
      },
      {
        path: 'design-details',
        loadChildren: './modules/design-details/design-details.module#DesignDetailsModule',
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'design-home/design-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
