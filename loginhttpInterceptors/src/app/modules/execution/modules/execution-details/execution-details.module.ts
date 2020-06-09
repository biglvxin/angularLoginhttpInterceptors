import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionDetailsRoutingModule } from './execution-details-routing.module';
import { ExecutionDetailsComponent } from './execution-details.component';


@NgModule({
  declarations: [
    ExecutionDetailsComponent,
  ],
  imports: [
    CommonModule,
    ExecutionDetailsRoutingModule
  ]
})
export class ExecutionDetailsModule { }
