import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersHomeComponent } from "./customers-home/customers-home.component";
import { CustomersDetailComponent } from "./customers-detail/customers-detail.component"
import { CustomersNewComponent } from "./customers-new/customers-new.component";
import { SharedModule } from '../../shared/shared.module';
import { AddAccountComponent } from './customers-detail/add-account/add-account.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent,
    CustomersNewComponent,
    AddAccountComponent
  ],
  entryComponents: [
    AddAccountComponent
  ]
})
export class CustomersModule {}
