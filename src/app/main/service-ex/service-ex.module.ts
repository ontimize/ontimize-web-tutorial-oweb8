import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx" ;
import { ServiceExRoutingModule } from './service-ex-routing.module';
import { ServiceExHomeComponent } from './service-ex-home/service-ex-home.component';
import {StarsWarsService} from '../../shared/star-wars.service';
import { ServiceExDetailsComponent } from './service-ex-details/service-ex-details.component';


export function starsWarsServiceFactory(injector: Injector): StarsWarsService {
  return new StarsWarsService(injector);
}


@NgModule({
  declarations: [ServiceExHomeComponent, ServiceExDetailsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ServiceExRoutingModule
  ],
  providers: [{
    provide: 'starsWars',
    useFactory: starsWarsServiceFactory,
    deps: [Injector]
  }]
})
export class ServiceExModule { }
