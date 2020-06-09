import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyCoverageRoutingModule } from './policy-coverage-routing.module';
import { PolicyCoverageComponent } from './policy-coverage.component';


@NgModule({
  declarations: [
    PolicyCoverageComponent,
  ],
  imports: [
    CommonModule,
    PolicyCoverageRoutingModule
  ]
})
export class PolicyCoverageModule { }
