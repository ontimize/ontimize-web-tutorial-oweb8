import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    AccountsRoutingModule
  ],
  declarations: [
    AccountsHomeComponent
  ]
})
export class AccountsModule { }
