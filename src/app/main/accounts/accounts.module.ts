import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountsNewComponent } from './accounts-new/accounts-new.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddMovementComponent } from './add-movement/add-movement.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    AccountsRoutingModule,
  ],
  declarations: [
    AccountsHomeComponent,
    AccountsNewComponent,
    AddCustomerComponent,
    AddMovementComponent
  ]
})
export class AccountsModule { }
