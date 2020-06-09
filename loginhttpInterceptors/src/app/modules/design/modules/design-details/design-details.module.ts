import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignDetailsRoutingModule } from './design-details-routing.module';
import { DesignDetailsComponent } from './design-details.component';


@NgModule({
  declarations: [
    DesignDetailsComponent,
  ],
  imports: [
    CommonModule,
    DesignDetailsRoutingModule
  ]
})
export class DesignDetailsModule { }
