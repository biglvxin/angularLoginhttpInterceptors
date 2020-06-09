import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignListRoutingModule } from './design-list-routing.module';
import { DesignListComponent } from './design-list.component';


@NgModule({
  declarations: [
    DesignListComponent,
  ],
  imports: [
    CommonModule,
    DesignListRoutingModule
  ]
})
export class DesignListModule { }
