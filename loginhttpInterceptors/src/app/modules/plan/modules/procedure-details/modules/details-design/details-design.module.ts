import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDesignRoutingModule } from './details-design-routing.module';
import { DetailsDesignComponent } from './details-design.component';


@NgModule({
  declarations: [
    DetailsDesignComponent,
  ],
  imports: [
    CommonModule,
    DetailsDesignRoutingModule
  ]
})
export class DetailsDesignModule { }
