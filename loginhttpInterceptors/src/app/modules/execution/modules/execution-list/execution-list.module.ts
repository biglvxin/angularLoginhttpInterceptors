import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionListRoutingModule } from './execution-list-routing.module';
import { ExecutionListComponent } from './execution-list.component';


@NgModule({
  declarations: [
    ExecutionListComponent,
  ],
  imports: [
    CommonModule,
    ExecutionListRoutingModule
  ]
})
export class ExecutionListModule { }
