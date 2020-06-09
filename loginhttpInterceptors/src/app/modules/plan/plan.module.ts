import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProcedureListComponent } from './modules/procedure-list/procedure-list.component';
import { EntityListComponent } from './modules/entity-list/entity-list.component';
import { ProcedureDetailsComponent } from './modules/procedure-details/procedure-details.component';
import { RegulatoryCoverageComponent } from './modules/regulatory-coverage/regulatory-coverage.component';
import { PolicyCoverageComponent } from './modules/policy-coverage/policy-coverage.component';


@NgModule({
  declarations: [
    PlanComponent,
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    CoreModule
  ]
})
export class PlanModule { }
