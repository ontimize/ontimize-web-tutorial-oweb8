import { Injector, NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { AccountNumberRenderComponent } from '../main/accounts/accounts-home/account-number-render/account-number-render.component';
import { CustomertypeColumnRendererComponent } from '../main/customers/customers-home/customertype-column-renderer/customertype-column-renderer.component';
import { MovementColumnRendererComponent } from '../main/accounts/accounts-detail/movement-column-renderer/movement-column-renderer.component';
import { MENU_COMPONENTS } from './app.menu.config';
import { starsWarsServiceFactory } from '../main/service-ex/service-ex.module';
import { StarsWarsService } from './star-wars.service';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { AccountsDetailComponent } from '../main/accounts/accounts-detail/accounts-detail.component';
import { OMapModule } from "ontimize-web-ngx-map";


export function intRateMonthlyFunction (rowData: Array<any>): number {
  return rowData["INTERESRATE"]/12;
}

@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule,
    OMapModule
  ],
  declarations: [
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent,
    MovementColumnRendererComponent,
    ...MENU_COMPONENTS,
    AccountsDetailComponent
  ],
  exports: [
    CommonModule,
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent,
    MovementColumnRendererComponent,
    ...MENU_COMPONENTS,
    OChartModule,
    AccountsDetailComponent,
    OMapModule
  ],
  entryComponents: [...MENU_COMPONENTS],
  providers: [{
    provide: StarsWarsService,
    useFactory: starsWarsServiceFactory,
    deps: [Injector]
  }]
})
export class SharedModule { }
