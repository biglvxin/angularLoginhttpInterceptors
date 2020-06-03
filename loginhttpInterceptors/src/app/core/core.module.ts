import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EvironmentService } from './services/evironment.service';
import { HttpClientModule } from '@angular/common/http';

export function init(evironmentService: EvironmentService) {
  return () => {
    evironmentService.getEvironmentDetail().subscribe();
  };
}
@NgModule({
  declarations: [CoreComponent, NavBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [NavBarComponent],
  providers: [
    EvironmentService,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [EvironmentService],
      multi: true

    }
  ]
})
export class CoreModule { }
