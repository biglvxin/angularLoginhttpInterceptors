import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './design.component';
import { CoreModule } from 'src/app/core/core.module';
import { DesignListComponent } from './modules/design-list/design-list.component';
import { DesignDetailsComponent } from './modules/design-details/design-details.component';


@NgModule({
  declarations: [
    DesignComponent,
  ],
  imports: [
    CommonModule,
    DesignRoutingModule,
    CoreModule
  ]
})
export class DesignModule { }
