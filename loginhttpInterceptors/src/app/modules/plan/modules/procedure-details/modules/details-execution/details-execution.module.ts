import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsExecutionRoutingModule } from './details-execution-routing.module';
import { DetailsExecutionComponent } from './details-execution.component';


@NgModule({
  declarations: [
    DetailsExecutionComponent
  ],
  imports: [
    CommonModule,
    DetailsExecutionRoutingModule
  ]
})
export class DetailsExecutionModule { }
