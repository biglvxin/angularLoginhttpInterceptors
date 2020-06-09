import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureListRoutingModule } from './procedure-list-routing.module';
import { ProcedureListComponent } from './procedure-list.component';


@NgModule({
  declarations: [
    ProcedureListComponent,
  ],
  imports: [
    CommonModule,
    ProcedureListRoutingModule
  ]
})
export class ProcedureListModule { }
