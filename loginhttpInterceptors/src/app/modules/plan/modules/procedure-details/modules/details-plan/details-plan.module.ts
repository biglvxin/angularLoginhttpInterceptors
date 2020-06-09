import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPlanRoutingModule } from './details-plan-routing.module';
import { DetailsPlanComponent } from './details-plan.component';


@NgModule({
  declarations: [
    DetailsPlanComponent,
  ],
  imports: [
    CommonModule,
    DetailsPlanRoutingModule
  ]
})
export class DetailsPlanModule { }
