import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionRoutingModule } from './execution-routing.module';
import { ExecutionComponent } from './execution.component';
import { CoreModule } from 'src/app/core/core.module';
import { ExecutionDetailsComponent } from './modules/execution-details/execution-details.component';
import { ExecutionListComponent } from './modules/execution-list/execution-list.component';


@NgModule({
  declarations: [ExecutionComponent],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    CoreModule
  ]
})
export class ExecutionModule { }
