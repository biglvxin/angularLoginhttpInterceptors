import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulatoryCoverageRoutingModule } from './regulatory-coverage-routing.module';
import { RegulatoryCoverageComponent } from './regulatory-coverage.component';


@NgModule({
  declarations: [
    RegulatoryCoverageComponent,
  ],
  imports: [
    CommonModule,
    RegulatoryCoverageRoutingModule
  ]
})
export class RegulatoryCoverageModule { }
