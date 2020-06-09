import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureDetailsRoutingModule } from './procedure-details-routing.module';
import { ProcedureDetailsComponent } from './procedure-details.component';
import { DetailsPlanComponent } from './modules/details-plan/details-plan.component';
import { DetailsDesignComponent } from './modules/details-design/details-design.component';
import { DetailsExecutionComponent } from './modules/details-execution/details-execution.component';


@NgModule({
  declarations: [
    ProcedureDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProcedureDetailsRoutingModule
  ]
})
export class ProcedureDetailsModule { }
