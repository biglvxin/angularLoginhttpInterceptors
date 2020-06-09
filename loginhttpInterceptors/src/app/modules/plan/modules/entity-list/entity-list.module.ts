import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityListRoutingModule } from './entity-list-routing.module';
import { EntityListComponent } from './entity-list.component';


@NgModule({
  declarations: [
    EntityListComponent,
  ],
  imports: [
    CommonModule,
    EntityListRoutingModule
  ]
})
export class EntityListModule { }
