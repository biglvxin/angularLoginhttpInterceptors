import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EvironmentService } from './services/evironment.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';
import { SubNavBarComponent } from './components/sub-nav-bar/sub-nav-bar.component';

export function init(evironmentService: EvironmentService) {
  return () => {
    evironmentService.getEvironmentDetail().subscribe();
  };
}
@NgModule({
  declarations: [CoreComponent, NavBarComponent, SubNavBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [NavBarComponent, SubNavBarComponent],
  providers: [
    EvironmentService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [EvironmentService],
      multi: true
    }
  ]
})
export class CoreModule { }
